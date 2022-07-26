var http = require("http");

http.createServer(function(requisicao,resposta){
    resposta.end("<h1>Bem vindo ao site!</h1><h4>Carlos</h4>")
}).listen(3000); 

console.log("Meu servidor está rodando!");