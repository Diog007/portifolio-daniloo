import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';

class Particle {
  constructor(
    public x: number,
    public y: number,
    public size: number,
    public color: string,
    private canvasWidth: number,
    private canvasHeight: number,
    public speedX = Math.random() * 1 - 0.5,
    public speedY = Math.random() * 1 - 0.5
  ) {}

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > this.canvasWidth) this.speedX *= -1;
    if (this.y < 0 || this.y > this.canvasHeight) this.speedY *= -1;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

@Component({
  selector: 'app-cyber-background',
  standalone: true,
  template: `
    <canvas #particleCanvas class="fixed inset-0 z-0 pointer-events-none"></canvas>
  `,
  styles: [`
    :host, canvas {
      position: fixed;
      inset: 0;
      width: 100%;
      height: 100%;
      background: #0a192f;
    }
  `]
})
export class CyberBackgroundComponent {
  @ViewChild('particleCanvas', { static: true })
  canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private mouse = { x: -1_000, y: -1_000 };

  // número responsivo de partículas
  private get particleCount() { return innerWidth < 768 ? 50 : 100; }

  /* ----------- CICLO DE VIDA ----------- */
  ngOnInit() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    this.resizeCanvas();
    this.spawnParticles();
    this.animate();
  }

  /* ----------- EVENTOS DE JANELA ----------- */
  @HostListener('window:resize')
  resizeCanvas() {
    const canvas = this.canvasRef.nativeElement;
    canvas.width  = innerWidth;
    canvas.height = innerHeight;
    this.spawnParticles();                 // re-espalha partículas
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(ev: MouseEvent) {
    this.mouse.x = ev.clientX;
    this.mouse.y = ev.clientY;
  }

  @HostListener('document:mouseleave')
  onMouseLeave() {
    this.mouse.x = this.mouse.y = -1_000;  // “desliga” o efeito
  }

  /* ----------- LÓGICA DE PARTÍCULAS ----------- */
  private spawnParticles() {
    const { width, height } = this.canvasRef.nativeElement;
    this.particles = Array.from({ length: this.particleCount }, () => {
      const size = Math.random() * 3 + 1;
      return new Particle(
        Math.random() * width,
        Math.random() * height,
        size,
        `hsl(${Math.random() * 60 + 180}, 70%, 60%)`,
        width,
        height
      );
    });
  }

  private animate = () => {
    requestAnimationFrame(this.animate);
    const { width, height } = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, width, height);

    /* Desenha partículas e linhas com o mouse */
    this.particles.forEach(p => {
      p.update();
      p.draw(this.ctx);

      const dx = this.mouse.x - p.x;
      const dy = this.mouse.y - p.y;
      const dist = Math.hypot(dx, dy);

      if (dist < 150) {
        this.ctx.strokeStyle = `rgba(100,255,255,${1 - dist / 150})`;
        this.ctx.lineWidth = 0.5;
        this.ctx.beginPath();
        this.ctx.moveTo(p.x, p.y);
        this.ctx.lineTo(this.mouse.x, this.mouse.y);
        this.ctx.stroke();
      }
    });

    /* Desenha linhas entre partículas próximas */
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const dist = Math.hypot(dx, dy);

        if (dist < 100) {
          this.ctx.strokeStyle = `rgba(100,255,255,${1 - dist / 100})`;
          this.ctx.lineWidth = 0.3;
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
        }
      }
    }
  };
}
