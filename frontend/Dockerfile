# Usar imagem base do Node.js
FROM node:18

# Definir o diretório de trabalho
WORKDIR /app

# Copiar apenas os arquivos de dependências
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante dos arquivos do projeto
COPY . .

# Expor a porta usada pelo Vite
EXPOSE 5173

# Iniciar o servidor de desenvolvimento do Vite
CMD ["npm", "run", "dev"]
