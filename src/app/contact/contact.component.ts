import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { init } from 'emailjs-com';

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
    subject: '',
    message: ''
  };

  constructor() {
    // Inicialize o EmailJS com seu User ID
    init('3uaFYHc6mvmgWsH7s'); // Substitua pelo seu User ID do EmailJS
  }

  async sendEmail() {
    if (this.isSending) return;
    
    this.isSending = true;
    this.sendSuccess = false;
    this.sendError = false;

    try {
      const templateParams = {
        from_name: this.form.name,
        from_email: this.form.email,
        to_email: this.email,
        subject: this.form.subject,
        message: this.form.message,
        reply_to: this.form.email
      };

      await emailjs.send(
        'service_0ggqnea', // Substitua pelo seu Service ID
        'template_y7wwd1e', // Substitua pelo seu Template ID
        templateParams
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
      subject: '',
      message: ''
    };
  }
}
