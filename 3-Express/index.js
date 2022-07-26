const express = require("express"); // Importando o Express
const app = express(); //é a função que vai carregar toda a biblioteca dentro de uma variável ou constante / iniciando o Express


app.get("/",function(req, res){
    res.send("Bem vindo ao site!"); //é preciso enviar uma resposta na rota e não pode ser +1
});

app.get("/blog/:artigo?", function(req, res){

    var artigo = req.params.artigo;

    if(artigo){
        res.send("<h2>Artigo: " + artigo + " </h2>")
    }else{
        
        res.send("Bem vindo ao meu blog!!");
    }

})

app.get("/canal/youtube", function(req, res){
    var canal = req.query["canal"]

    if(canal){
        res.send(canal);
    }else{
        res.send("Nenhum canal fornecido!");
    }

})

app.get("/ola/:nome/:empresa", function(req, res){
    //req => são os dados enviados pelo usuário
    //res => resposta que vai ser enviada pelo usuário
    var nome = req.params.nome;
    var empresa = req.params.empresa;
    res.send("<h1>Oi " + nome + " da " + empresa + ".</h1>");
})


app.listen(4000, function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!!");
    }
})