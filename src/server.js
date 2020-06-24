const express = require("express");
const server = express();

// configurar pasta publica
server.use(express.static("public"));

// configurando template engine
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

// configurar caminhos da aplicação
// pagina inicial
// req: requisição res: resposta
server.get("/", (req, res) => {
  res.render("index.html");
});

server.get("/create-point", (req, res) => {
  res.render("create-point.html");
});
// ligar o servidor

server.listen(3000);
