import { Component, ElementRef, ViewChild, AfterViewInit, HostListener, Input } from '@angular/core';

// --------------------------------------------------
// CyberBackgroundComponent (sem rastro / motion‑blur)
// --------------------------------------------------

interface Vec2 { x: number; y: number; }

class Particle {
  hue = Math.random() * 60 + 180;
  constructor(
    public pos: Vec2,
    public vel: Vec2,
    public size: number,
    private readonly canvasSize: Vec2
  ) {}

  update(): void {
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;

    // Rebote nas bordas
    if (this.pos.x < 0 || this.pos.x > this.canvasSize.x) this.vel.x *= -1;
    if (this.pos.y < 0 || this.pos.y > this.canvasSize.y) this.vel.y *= -1;

    // Sutil variação de cor (efeito neon)
    this.hue = (this.hue + 0.1) % 360;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `hsl(${this.hue},70%,60%)`;
    ctx.fill();
  }
}

@Component({
  selector: 'app-cyber-background',
  standalone: true,
  template: `<canvas #canvas class="fixed inset-0 pointer-events-none select-none"></canvas>` ,
  styles: [`
    :host, canvas {
      position: fixed;
      inset: 0;
      width: 100%;
      height: 100%;
      background:#0a192f; /* fallback enquanto JS carrega */
    }
  `]
})
export class CyberBackgroundComponent implements AfterViewInit {
  @ViewChild('canvas', { static: true }) private canvasRef!: ElementRef<HTMLCanvasElement>;

  /** 0.5 = leve | 1 = normal | 2+ = denso */
  @Input() density = 1;

  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private mouse: Vec2 = { x: -1e3, y: -1e3 };
  private frameId!: number;
  private readonly ratio = window.devicePixelRatio || 1;

  /* ---------------- Ciclo de vida ---------------- */
  ngAfterViewInit(): void {
    this.setupCanvas();
    this.createParticles();
    this.frameId = requestAnimationFrame(this.animate);
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.frameId);
  }

  /* ---------------- Event listeners ---------------- */
  @HostListener('window:resize')
  onResize(): void {
    this.setupCanvas();
    this.createParticles();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    this.mouse = { x: e.clientX, y: e.clientY };
  }

  @HostListener('document:mouseleave')
  onMouseLeave(): void {
    this.mouse = { x: -1e3, y: -1e3 };
  }

  /* ---------------- Inicialização ---------------- */
  private setupCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    const { innerWidth: w, innerHeight: h } = window;

    // Canvas Hi‑DPI
    canvas.width  = w * this.ratio;
    canvas.height = h * this.ratio;
    canvas.style.width  = `${w}px`;
    canvas.style.height = `${h}px`;

    this.ctx = canvas.getContext('2d')!;
    this.ctx.scale(this.ratio, this.ratio);
  }

  private createParticles(): void {
    const { innerWidth: w, innerHeight: h } = window;
    const count = (w < 768 ? 50 : 100) * this.density;

    this.particles = Array.from({ length: count }, () => {
      const size = Math.random() * 3 + 1;
      return new Particle(
        { x: Math.random() * w, y: Math.random() * h },
        { x: Math.random() - 0.5, y: Math.random() - 0.5 },
        size,
        { x: w, y: h }
      );
    });
  }

  /* ---------------- Loop de animação ---------------- */
  private animate = (): void => {
    this.frameId = requestAnimationFrame(this.animate);
    const { innerWidth: w, innerHeight: h } = window;

    // Limpamos completamente: SEM rastro/motion‑blur
    this.ctx.clearRect(0, 0, w, h);

    // Partículas e interações
    for (const p of this.particles) {
      p.update();
      p.draw(this.ctx);

      // Linha até o mouse
      const dx = this.mouse.x - p.pos.x;
      const dy = this.mouse.y - p.pos.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 140) {
        this.ctx.strokeStyle = `rgba(100,255,255,${1 - dist / 140})`;
        this.ctx.lineWidth = 0.4;
        this.ctx.beginPath();
        this.ctx.moveTo(p.pos.x, p.pos.y);
        this.ctx.lineTo(this.mouse.x, this.mouse.y);
        this.ctx.stroke();
      }
    }

    // Linhas entre partículas próximas
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const a = this.particles[i];
        const b = this.particles[j];
        const dx = a.pos.x - b.pos.x;
        const dy = a.pos.y - b.pos.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 90) {
          this.ctx.strokeStyle = `rgba(100,255,255,${1 - dist / 90})`;
          this.ctx.lineWidth = 0.25;
          this.ctx.beginPath();
          this.ctx.moveTo(a.pos.x, a.pos.y);
          this.ctx.lineTo(b.pos.x, b.pos.y);
          this.ctx.stroke();
        }
      }
    }
  };
}
