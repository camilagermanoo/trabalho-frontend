# 🎬 CineReview — Acervo e Avaliação de Filmes

[![React](https://img.shields.io/badge/React_19-20232a?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router_v7-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![React Hook Form](https://img.shields.io/badge/React_Hook_Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)](https://react-hook-form.com/)
[![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)
[![JSON Server](https://img.shields.io/badge/JSON_Server-000000?style=for-the-badge&logo=json&logoColor=white)](https://github.com/typicode/json-server)
[![Vitest](https://img.shields.io/badge/Vitest-729B1B?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev/)

> Aplicação web desenvolvida em React para navegação, registo validado, listagem dinâmica de dados e gestão de estado compartilhado integrado a uma API REST simulada.

---

## 🛠️ Tecnologias Utilizadas

- **[React 19](https://react.dev/)** — Biblioteca principal para a construção da interface modular.
- **[Vite](https://vitejs.dev/)** — Motor de empacotamento e servidor de desenvolvimento ultrarrápido.
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Framework de CSS *utility-first* para a estilização responsiva.
- **[React Router v7](https://reactrouter.com/)** — Gestão do roteamento declarativo entre os ecrãs.
- **[React Hook Form](https://react-hook-form.com/)** — Controlo de inputs e validação performática de formulários.
- **[Axios](https://axios-http.com/)** — Cliente HTTP para as requisições assíncronas à API.
- **[JSON Server](https://github.com/typicode/json-server)** — Criação da API REST simulada (rotas de leitura e escrita).
- **[Vitest](https://vitest.dev/)** & **[JSDOM](https://github.com/jsdom/jsdom)** — Framework e emulador de DOM para a suíte de testes automatizados.

---

## 🎯 Objetivo Geral

Desenvolver uma aplicação frontend em **React** simulando um cenário real de integração com API REST. O sistema permite que os utilizadores explorem um acervo de filmes, realizem o registo de novos utilizadores e filmes com validação de formulários, e visualizem as atualizações de forma instantânea através da gestão de estado global.

---

## 👥 Membros da Equipe

| Nome | GitHub |
| :--- | :--- |
| **Camila Germano** | [@camilagermanoo](https://github.com/camilagermanoo) |
| **José Lucas Ferreira de Sousa** | [@joselucas-coder](https://github.com/joselucas-coder) |
| **Kalil Candido Silva de Lima** | [@Kalil-Hub](https://github.com/Kalil-Hub) |

---

## 🧩 Requisitos Funcionais Atendidos

- [x] **Navegação Declarativa:** Roteamento entre no mínimo três páginas (*Home*, *Cadastro* e *Listagem*) utilizando `react-router-dom`.
- [x] **Formulários Controlados e Validados:** Implementação de formulário com validação de campos obrigatórios e regex de e-mail através do `react-hook-form`.
- [x] **Listagem Dinâmica:** Renderização múltipla de componentes de card utilizando a função `.map()`.
- [x] **Estado Global Compartilhado:** Gestão de estado via `Context API`, permitindo que cadastros reflitam imediatamente na listagem sem recarregar a página.
- [x] **Integração com API REST:** Consumo e envio de dados assíncronos via `Axios` para um backend simulado com `JSON Server`.
- [x] **Estilização e Responsividade:** Interface moderna e responsiva construída com `Tailwind CSS v4`.
- [x] **Testes Automatizados:** Cobertura de testes unitários de validação, teste de fumaça e teste de integração fim a fim (E2E) configurados com `Vitest` e `JSDOM`.

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 20 ou superior recomendada)

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/camilagermanoo/trabalho-frontend.git](https://github.com/camilagermanoo/trabalho-frontend.git)
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd trabalho-frontend
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie a API REST simulada (JSON Server) em um terminal:**
   ```bash
   npm run server
   ```
   *(A API estará disponível em `http://localhost:3001/filmes` e `http://localhost:3001/usuarios`)*.

5. **Em um segundo terminal, inicie o servidor de desenvolvimento do React:**
   ```bash
   npm run dev
   ```

6. **Acesse a aplicação no navegador:**
   Abra [http://localhost:5173](http://localhost:5173).

---

## 🧪 Executando os Testes Automatizados

A aplicação possui uma suíte automatizada que testa a montagem do sistema, as regras de validação pura e a integração do formulário com o estado global. Para rodar:

```bash
npm run test
```

---

## 📂 Estrutura de Ficheiros

```text
trabalho-frontend/
├── db.json                  # Base de dados simulada da API REST
├── src/
│   ├── assets/              # Imagens e ícones estáticos
│   ├── components/          # Componentes reutilizáveis (Navbar)
│   ├── context/             # Gestão de estado global (UserContext)
│   ├── pages/               # Páginas da aplicação (Home, Cadastro, Listagem)
│   ├── tests/               # Suíte de testes automatizados e setup
│   ├── utils/               # Funções auxiliares puras (validações)
│   ├── App.jsx              # Configuração de roteamento principal
│   └── main.jsx             # Ponto de entrada da aplicação
├── vite.config.js           # Configuração do Vite, Tailwind e Vitest
└── package.json             # Lista de dependências e scripts
```
