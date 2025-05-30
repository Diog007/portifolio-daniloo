import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  skillList = [
    { name: 'JavaScript', percentage: 90, color: '#F7DF1E' },
    { name: 'Angular', percentage: 85, color: '#DD0031' },
    { name: 'Java', percentage: 80, color: '#007396' },
    { name: 'Spring Boot', percentage: 75, color: '#6DB33F' },
  ];

  toolIcons = [
    { iconClass: 'devicon-git-plain' },
    { iconClass: 'devicon-docker-plain' },
    { iconClass: 'devicon-linux-plain' },
    { iconClass: 'devicon-postgresql-plain' },
    { iconClass: 'devicon-mysql-plain' },
  ];
}
