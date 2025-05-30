import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  email = 'danilo.cybersec@gmail.com';

skills = [
    {
      icon: 'fas fa-eye',
      title: 'Monitoramento Proativo',
      description: 'Vigilância contínua de redes e sistemas utilizando ferramentas como Wazuh e SIEMs para detecção precoce de anomalias.'
    },
    {
      icon: 'fas fa-bug',
      title: 'Threat Hunting',
      description: 'Busca ativa por indicadores de comprometimento (IOCs) e análise de logs para identificar ameaças persistentes.'
    },
    {
      icon: 'fas fa-fire-extinguisher',
      title: 'Incident Response',
      description: 'Triagem, contenção e suporte a investigações de segurança com abordagem metodológica.'
    },
    {
      icon: 'fas fa-shield-virus',
      title: 'Vulnerability Management',
      description: 'Pentest básico, mitigação de vulnerabilidades e análise de riscos para fortalecer posturas de segurança.'
    }
  ];

  personalDetails = [
    {
      icon: 'fas fa-user',
      label: 'Nome Completo',
      value: 'Danilo Nascimento',
      link: null,
      external: false
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Localização',
      value: 'São Paulo, SP, Brasil',
      link: null,
      external: false
    },
    {
      icon: 'fas fa-envelope',
      label: 'E-mail',
      value: 'danilo.cybersec@gmail.com',
      link: 'mailto:danilo.cybersec@gmail.com',
      external: false
    },
    {
      icon: 'fas fa-globe',
      label: 'Portfólio',
      value: 'danilocybersec.netlify.app',
      link: 'https://danilocybersec.netlify.app/',
      external: true
    },
    {
      icon: 'fab fa-linkedin-in',
      label: 'LinkedIn',
      value: 'linkedin.com/in/eudanilocybersec',
      link: 'https://www.linkedin.com/in/eudanilocybersec',
      external: true
    },
    {
      icon: 'fas fa-heart',
      label: 'Fé',
      value: 'ᴊᴇꜱᴜꜱ/Yeshua',
      link: null,
      external: false
    }
  ];
}
