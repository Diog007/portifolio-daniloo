import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
profileImage = 'https://media.licdn.com/dms/image/v2/D4E03AQHFz1oF8e_GrA/profile-displayphoto-shrink_800_800/B4EZcXxE7pHYAk-/0/1748450431141?e=1753920000&v=beta&t=qoeDBoYikJx7eXQ0KYozxVyeKymw0P03G_meq1ik_3E';
imagePath = '/assets/danilo.jpeg';
}