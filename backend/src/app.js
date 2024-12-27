// Importa o framework Express
const express = require('express');

// Cria uma instância do aplicativo Express
const app = express();

// Define a porta na qual o servidor será executado
const PORT = process.env.PORT || 3000;

// Middleware para processar JSON
app.use(express.json());

// Rota básica para teste
app.get('/', (req, res) => {
  res.send('Bem-vindo ao backend!');
});

// Rota exemplo
app.get('/api/example', (req, res) => {
  res.json({ message: 'Esta é uma rota de exemplo!' });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
