RView - Monitoramento de Restauração da Rede Fotônica

RView é uma aplicação full stack para monitoramento de restauração da rede fotônica, projetada para oferecer uma interface intuitiva e dados em tempo real. A aplicação foi desenvolvida usando as tecnologias mais recentes para backend e frontend, executando em contêineres Docker para garantir portabilidade e escalabilidade.

Índice

1. Tecnologias Utilizadas
2. Estrutura do Projeto
3. Instalação e Configuração
4. Configuração do Docker
5. Comandos Principais
6. Funcionalidades
7. Contribuição
8. Licença

### Tecnologias Utilizadas

#### Backend

- Node.js 18
- ExpressJS
- Sequelize (ORM)
- PostgreSQL 14

#### Frontend

- ReactJS 18
- Vite
- TailwindCSS
- Componentes de Tailwind

#### Infraestrutura

- Docker e Docker Compose
- Rede Docker personalizada

### Estrutura do Projeto

```
rview/
├── backend/               # Código fonte do backend
│   ├── src/
│   │   ├── config/        # Configurações gerais
│   │   ├── controllers/   # Controladores de rotas
│   │   ├── models/        # Modelos do Sequelize
│   │   ├── routes/        # Rotas do ExpressJS
│   │   ├── services/      # Regras de negócios
│   │   └── app.js         # Configuração principal
│   ├── Dockerfile
│   └── package.json
├── frontend/              # Código fonte do frontend
│   ├── src/
│   │   ├── components/    # Componentes React
│   │   ├── pages/         # Páginas da aplicação
│   │   ├── App.jsx        # Componente principal
│   │   └── index.css      # Estilos TailwindCSS
│   ├── tailwind.config.js # Configuração do TailwindCSS
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml     # Orquestração Docker
└── README.md              # Documentação do projeto
```

### Instalação e Configuração

#### Pré-requisitos

Certifique-se de ter instalado:

- Docker
- Docker Compose
- Node.js (caso prefira rodar sem Docker)

#### Clonando o Repositório

```bash
git clone https://github.com/sua-conta/rview.git
cd rview
```

#### Configuração do Backend

No arquivo `backend/src/config/database.js`, configure as credenciais do banco PostgreSQL:

```javascript
module.exports = {
  username: "postgres",
  password: "postgres",
  database: "rview_dev",
  host: "db",
  dialect: "postgres",
};
```

#### Configuração do Frontend

Edite o arquivo `frontend/src/services/api.js` para apontar o backend:

```javascript
const API_BASE_URL = "http://localhost:3001";
```

### Configuração do Docker

Certifique-se de estar na raiz do projeto. Execute os comandos para iniciar os contêineres:

#### Construir os Contêineres

```bash
docker-compose up --build
```

#### Acessar a Aplicação

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend (API): [http://localhost:3001](http://localhost:3001)

### Comandos Principais

#### Backend

Iniciar o backend localmente:

```bash
cd backend
npm install
npm run dev
```

#### Frontend

Iniciar o frontend localmente:

```bash
cd frontend
npm install
npm run dev
```

#### Banco de Dados

Criar o banco:

```bash
npx sequelize-cli db:create
```

Executar migrações:

```bash
npx sequelize-cli db:migrate
```

### Funcionalidades

- **Interface amigável:** Visualize dados de restauração em tabelas e gráficos.
- **Séries temporais:** Análise de eventos com gráficos detalhados.
- **Modularidade:** Backend e frontend separados para fácil manutenção e escalabilidade.
- **Persistência:** Armazenamento confiável usando PostgreSQL.
- **Contêinerização:** Aplicação encapsulada em contêineres Docker.

### Contribuição

1. Faça um fork do repositório.
2. Crie uma branch para sua feature:

```bash
git checkout -b feature/nome-da-feature
```

3. Faça o commit das alterações:

```bash
git commit -m "Descrição da alteração"
```

4. Envie suas alterações:

```bash
git push origin feature/nome-da-feature
```

5. Abra um Pull Request.

### Licença

Este projeto está licenciado sob a MIT License. Consulte o arquivo LICENSE para mais informações.
