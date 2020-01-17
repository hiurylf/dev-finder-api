const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://hiury:pohadinha@cluster0-yxtdj.mongodb.net/week10?retryWrites=true&w=majority' ,
    { useNewUrlParser: true },
    { useUnifiedTopology: true }).catch( (erro) => {
        console.log(erro);
});

app.use(express.json()); //valida json para todos os metodos da aplicacao   === tem que vir antes do routes, para as rotas entendenrem que podem usar o json
app.use(routes);
app.listen(3333);


