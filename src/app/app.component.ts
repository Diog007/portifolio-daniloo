import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { ServicesComponent } from './sobre/services.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialsComponent } from './certificacoes/testimonials.component';
import { EducationAndCertificationsComponent } from './habilidades/education-and-certifications.component';
import { ProjectsComponent } from "./projects/projects.component";
import { ViewportScroller } from '@angular/common';
// CyberBackgroundComponent pode ser removido se você não o estiver usando mais no template
import { CyberBackgroundComponent } from './cyber-background/cyber-background.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent,
    TestimonialsComponent,
    EducationAndCertificationsComponent,
    ProjectsComponent,
    // CyberBackgroundComponent // Remova esta linha se você o removeu do app.component.html
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// Implementa as interfaces OnInit e AfterViewInit
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Danilo Nascimento';
  mobileMenuOpen = false;

  // --- CORREÇÃO: Adicionado '!' para resolver o erro ts(2564) ---
  // Isso informa ao TypeScript que a propriedade será inicializada pelo Angular.
  @ViewChild('backgroundVideo') backgroundVideo!: ElementRef<HTMLVideoElement>;

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    // Sua lógica de scroll suave pode permanecer aqui
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (event) => {
        event.preventDefault();
        const target = anchor.getAttribute('href');
        if (target) {
          this.viewportScroller.scrollToAnchor(target.substring(1));
        }
      });
    });
  }

  ngAfterViewInit(): void {
    // Verifica se a referência ao vídeo foi encontrada
    if (this.backgroundVideo) {
      // Garante que o vídeo está sem som (essencial para autoplay)
      this.backgroundVideo.nativeElement.muted = true;
      
      // Tenta iniciar a reprodução programaticamente
      const playPromise = this.backgroundVideo.nativeElement.play();

      if (playPromise !== undefined) {
        playPromise.catch(error => {
          // Loga um erro no console se o navegador bloquear a reprodução
          console.error('Autoplay foi impedido pelo navegador:', error);
        });
      }
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
