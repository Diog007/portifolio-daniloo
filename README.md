# Portfólio de Danilo Nascimento - Analista de Cibersegurança

![Banner do Portfólio de Danilo Nascimento](https://placehold.co/1200x630/0a192f/64ffda?text=Danilo+Nascimento\nCybersecurity+Portfolio)

Este repositório contém o código-fonte do meu portfólio pessoal, uma aplicação moderna de página única (SPA) desenvolvida para apresentar minhas habilidades, experiência e projetos na área de Cibersegurança.

**➡️ Visite a versão ao vivo:** [**www.danilocybersec.com.br**](https://www.danilocybersec.com.br/)

---

## 🚀 Sobre o Projeto

Este projeto foi construído do zero utilizando as tecnologias mais recentes do ecossistema Angular. O objetivo era criar uma plataforma visualmente atraente e profissional que não apenas listasse minhas competências, mas também demonstrasse minhas habilidades em desenvolvimento frontend.

### Principais Funcionalidades

- **Design Moderno e Responsivo:** Interface com tema "cyberpunk/tech", totalmente adaptável para desktops, tablets e dispositivos móveis.
- **Background Interativo:** Animação de partículas em HTML5 Canvas que reage ao movimento do mouse, criando uma experiência de usuário dinâmica e imersiva.
- **Arquitetura Moderna com Angular 19:** Utiliza a arquitetura de **Componentes Standalone** para melhor otimização, performance e manutenibilidade do código.
- **Seções Estratégicas:**
  - **Sobre Mim:** Resumo profissional, objetivos e informações pessoais.
  - **Experiência:** Linha do tempo interativa com histórico profissional detalhado.
  - **Habilidades & Ferramentas:** Demonstração visual de competências técnicas.
  - **Projetos:** Showcase de projetos práticos e estudos de caso relevantes.
  - **Certificações:** Lista de certificações da área de segurança.
- **Funcionalidades Interativas:**
  - **Formulário de Contato Funcional:** Integração com **EmailJS** para envio de e-mails diretamente pela página.
  - **Download de Currículo:** Acesso fácil à versão mais recente do meu currículo em formato PDF.

---

## 🛠️ Tecnologias Utilizadas

![Angular](https://img.shields.io/badge/Angular-v19-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

- **Frontend:**
  - [Angular](https://angular.dev/) (v19)
  - [TypeScript](https://www.typescriptlang.org/)
- **Estilização:**
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Font Awesome](https://fontawesome.com/) (Ícones)
- **Funcionalidades Adicionais:**
  - [EmailJS](https://www.emailjs.com/) (Serviço de e-mail)
  - [HTML5 Canvas](https://developer.mozilla.org/pt-BR/docs/Web/API/Canvas_API) (Animação de fundo)

---

## 📂 Estrutura do Projeto

O projeto é organizado de forma modular, com cada seção da página sendo um componente Angular independente, promovendo a reutilização e facilitando a manutenção.

src/app/├── 📄 app.component.ts         # Componente principal que monta a página├── 📄 app.component.html       # Estrutura principal com as camadas de conteúdo e background├── 📄 app.component.css        # Estilos do componente principal│├── 📁 certificacoes/          # Seção de Certificações├── 📁 contact/                 # Seção de Contato com o formulário├── 📁 cyber-background/        # Componente da animação interativa do canvas├── 📁 habilidades/             # Seção de Habilidades├── 📁 experience/              # Seção de Experiência Profissional├── 📁 footer/                  # Componente do rodapé├── 📁 header/                  # Componente do cabeçalho de navegação├── 📁 hero/                    # Seção de apresentação inicial├── 📁 projects/                # Seção de Projetos└── 📁 sobre/                   # Seção Sobre Mim
---

## ⚙️ Como Executar Localmente

Siga os passos abaixo para configurar e executar o projeto no seu ambiente de desenvolvimento.

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18.x ou superior)
- [Angular CLI](https://angular.dev/cli) (versão 19.x)

### Passos

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)
    cd nome-do-repositorio
    ```

2.  **Instale as dependências do projeto:**
    ```bash
    npm install
    ```

3.  **Configure o Formulário de Contato (Opcional):**
    Para que o formulário de contato funcione localmente, você precisa criar uma conta gratuita no [EmailJS](https://www.emailjs.com/) e configurar suas chaves no arquivo `src/app/contact/contact.component.ts`.

    ```typescript
    // Em src/app/contact/contact.component.ts
    
    // ...
    init('SEU_USER_ID'); // Substitua pelo seu User ID
    // ...
    await emailjs.send(
      'SEU_SERVICE_ID', // Substitua pelo seu Service ID
      'SEU_TEMPLATE_ID', // Substitua pelo seu Template ID
      templateParams
    );
    // ...
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    ng serve
    ```
    Acesse `http://localhost:4200/` no seu navegador. A aplicação será recarregada automaticamente sempre que você salvar uma alteração nos arquivos.

---

## 🚀 Deploy

A versão de produção deste projeto está hospedada  e configurada com o domínio personalizado [danilocybersec.com.br](https://www.danilocybersec.com.br/). O processo de build é acionado automaticamente a cada `push` na branch `main`.

Para gerar os arquivos de produção manualmente, execute:
```bash
ng build --configuration production
Os arquivos otimizados estarão disponíveis no diretório dist/.📫 ContatoDanilo NascimentoLinkedIn: linkedin.com/in/eudanilocybersecE-mail: danilo.cybersec@gmail.com [cite: diog007/portifolio-daniloo/portifolio-daniloo-efe55ffde1cb73a3ec45b4e6461d7e6bcfb1e7e6/public/Dan
