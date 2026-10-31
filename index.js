//Caso queira usar este código, baixe-o e abra-o no VS Code. Em seguida, digite `npm install` no terminal para baixar as dependências necessárias.

// Importa o framework Express para dentro do projeto.
// O Express facilita a criação de servidores e APIs com Node.js.
import express from "express";

// Cria uma aplicação Express.
// O "app" será usado para configurar as rotas e o servidor.
const app = express();

// Cria uma rota do tipo GET.
//
// "/" representa a rota principal da aplicação.
// "req" (request) representa a requisição recebida pelo servidor.
// "res" (response) representa a resposta que o servidor irá enviar.
//
// Quando alguém acessar:
// http://localhost:3333/
//
// essa função será executada.
app.get("/", (req, res) => {
  // Envia "Guilherme" como resposta para o cliente.
  res.send("Guilherme");
});

// Inicia o servidor na porta 3333.
//
// O servidor ficará aguardando requisições nessa porta.
// Exemplo de endereço:
// http://localhost:3333
app.listen(3333, () => {
  // Exibe uma mensagem no terminal informando
  // que o servidor foi iniciado com sucesso.
  console.log("Servidor rodando na porta 3333");
});

/*
  ==============================
  CONFIGURAÇÃO DO PROJETO
  ==============================

  1. Inicializar o projeto Node.js:

  npm init -y

  Esse comando cria o arquivo "package.json",
  que contém as configurações e dependências do projeto.

  2. Instalar o Express:

  npm install express

  Esse comando instala o Express no projeto e
  adiciona o pacote às dependências do package.json.

  ==============================
  EXECUTANDO O PROJETO
  ==============================

  Para executar o arquivo:

  node server.js

  OBS:
  Troque "server.js" pelo nome do seu arquivo.

  ==============================
  TESTANDO A API
  ==============================

  Abra o Thunder Client e faça uma requisição:

  Método: GET
  URL: http://localhost:3333

  O servidor deverá responder:

  "Guilherme"
*/
