FROM node:18

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de configuração do projeto
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Expõe a porta que a aplicação irá rodar
EXPOSE 8080

# Comando para iniciar a aplicação
CMD ["npm", "run", "serve"]