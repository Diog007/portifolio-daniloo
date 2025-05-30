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

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppComponent, HeaderComponent, HeroComponent, ServicesComponent,
    ExperienceComponent, ContactComponent, FooterComponent, TestimonialsComponent,
    EducationAndCertificationsComponent, ProjectsComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Danilo Nascimento';

    mobileMenuOpen = false;

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    // Configura o scroll suave para todos os links âncora
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
