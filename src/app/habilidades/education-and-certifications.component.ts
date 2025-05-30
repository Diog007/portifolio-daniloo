import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-education-and-certifications',
  imports: [],
  templateUrl: './education-and-certifications.component.html',
  styleUrl: './education-and-certifications.component.css'
})
export class EducationAndCertificationsComponent {
  technicalSkills = [
    { name: 'SIEM/SOC Operations', level: 85 },
    { name: 'Threat Detection', level: 80 },
    { name: 'Incident Response', level: 75 },
    { name: 'Vulnerability Assessment', level: 70 },
  ];

  tools = [
    { name: 'Wazuh', icon: 'fas fa-shield-alt' },
    { name: 'SIEMs', icon: 'fas fa-search' },
    { name: 'Linux', icon: 'fab fa-linux' },
    { name: 'CLI', icon: 'fas fa-terminal' },
    { name: 'Networking', icon: 'fas fa-network-wired' },
    { name: 'OWASP', icon: 'fas fa-lock' },
    { name: 'Kali Linux', icon: 'fas fa-bug' },
    { name: 'Python', icon: 'fas fa-code' },
  ];

  certifications = [
    { title: 'CompTIA Security+', date: 'Dez 2023', icon: 'fas fa-certificate' },
    { title: 'Certified Ethical Hacker (CEH)', date: '2024', icon: 'fas fa-shield-alt' },
  ];
}