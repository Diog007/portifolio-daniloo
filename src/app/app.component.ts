import { Component, OnInit } from '@angular/core';
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
import { CyberBackgroundComponent } from './cyber-background/cyber-background.component';

@Component({
  selector: 'app-root',
  standalone: true, // Importante: Garanta que o componente principal seja standalone
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
    CyberBackgroundComponent 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Danilo Nascimento';
  mobileMenuOpen = false;

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

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
