const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://hiury:pohadinha@cluster0-yxtdj.mongodb.net/week10?retryWrites=true&w=majority' ,
    { useNewUrlParser: true },
    { useUnifiedTopology: true }).catch( (erro) => {
        console.log(erro);
});

app.use(cors());
app.use(express.json()); //valida json para todos os metodos da aplicacao / obs: tem que vir antes do routes, para as rotas entendenrem que podem usar o json
app.use(routes);
server.listen(3333);


