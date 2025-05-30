import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  email: string = 'danilo.cybersec@gmail.com';
  isSending = false;
  sendSuccess = false;
  sendError = false;
  
  form = {
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  };

  getServiceName(serviceKey: string): string {
    const services: {[key: string]: string} = {
      'project': 'Projeto Elétrico',
      'industrial': 'Instalação Industrial',
      'building': 'Manutenção Predial',
      'ac': 'Ar Condicionado',
      'solar': 'Energia Solar',
      'network': 'Redes e Telecomunicações',
      'other': 'Outro'
    };
    return services[serviceKey] || serviceKey;
  }

  async sendEmail() {
    if (this.isSending) return;
    
    this.isSending = true;
    this.sendSuccess = false;
    this.sendError = false;

    try {
      const currentTime = new Date().toLocaleString('pt-BR');
      const serviceName = this.getServiceName(this.form.service);

      const templateParams = {
        from_name: this.form.name,
        reply_to: this.form.email,
        to_email: this.email,
        phone: this.form.phone,
        service: serviceName,
        message: this.form.message,
        time: currentTime,
        
        // Parâmetros para o template HTML
        subject: `Nova solicitação de orçamento - ${serviceName}`,
        client_name: this.form.name,
        client_email: this.form.email,
        client_phone: this.form.phone,
        client_service: serviceName,
        client_message: this.form.message,
        send_time: currentTime
      };

      await emailjs.send(
        'service_0ggqnea',
        'template_y7wwd1e',
        templateParams,
        '3uaFYHc6mvmgWsH7s'
      );

      this.sendSuccess = true;
      this.resetForm();
    } catch (error) {
      console.error('Erro ao enviar:', error);
      this.sendError = true;
    } finally {
      this.isSending = false;
    }
  }

  resetForm() {
    this.form = {
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    };
  }
}
