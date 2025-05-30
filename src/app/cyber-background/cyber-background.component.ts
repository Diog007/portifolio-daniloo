import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cyber-background',
  imports: [],
  template: `
    <div #canvasContainer class="fixed inset-0 -z-10 overflow-hidden bg-navy-900">
      <canvas #particleCanvas class="absolute inset-0 w-full h-full"></canvas>
    </div>
  `,
  styles: [
    `
      .bg-navy-900 {
        background-color: #0a192f;
      }
    `
  ]
})
export class CyberBackgroundComponent {
@ViewChild('particleCanvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private canvas!: HTMLCanvasElement;
  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private mouse = { x: -1000, y: -1000 };
  private particleCount = window.innerWidth < 768 ? 50 : 100;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.canvas = this.canvasRef.nativeElement;
    this.ctx = this.canvas.getContext('2d')!;
    this.initCanvas();
    this.createParticles();
    this.animate();
  }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.canvas, 'opacity', '1');
  }

  @HostListener('window:resize')
  onResize() {
    this.initCanvas();
    this.createParticles();
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent) {
    this.mouse.x = e.clientX;
    this.mouse.y = e.clientY;
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.mouse.x = -1000;
    this.mouse.y = -1000;
  }

  private initCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  private createParticles() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      const size = Math.random() * 3 + 1;
      this.particles.push(new Particle(
        Math.random() * this.canvas.width,
        Math.random() * this.canvas.height,
        size,
        `hsl(${Math.random() * 60 + 180}, 70%, 60%)`,
        this.canvas.width,
        this.canvas.height
      ));
    }
  }

  private animate() {
    requestAnimationFrame(() => this.animate());
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Update and draw particles
    this.particles.forEach(particle => {
      particle.update();
      particle.draw(this.ctx);
      
      // Connect particles near mouse
      const dx = this.mouse.x - particle.x;
      const dy = this.mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 150) {
        this.ctx.beginPath();
        this.ctx.strokeStyle = `rgba(100, 255, 255, ${1 - distance / 150})`;
        this.ctx.lineWidth = 0.5;
        this.ctx.moveTo(particle.x, particle.y);
        this.ctx.lineTo(this.mouse.x, this.mouse.y);
        this.ctx.stroke();
        this.ctx.closePath();
      }
    });
    
    // Connect nearby particles
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          this.ctx.beginPath();
          this.ctx.strokeStyle = `rgba(100, 255, 255, ${1 - distance / 100})`;
          this.ctx.lineWidth = 0.3;
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
          this.ctx.closePath();
        }
      }
    }
  }
}

class Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  canvasWidth: number;
  canvasHeight: number;
  speedX: number;
  speedY: number;

  constructor(x: number, y: number, size: number, color: string, canvasWidth: number, canvasHeight: number) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    
    // Bounce off walls
    if (this.x < 0 || this.x > this.canvasWidth) this.speedX *= -1;
    if (this.y < 0 || this.y > this.canvasHeight) this.speedY *= -1;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }
}