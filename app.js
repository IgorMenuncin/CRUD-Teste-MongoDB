const express = require('express');
//Importando express

const path = require('path');

const app = express();
//Atribuindo o express a constante app

app.use(express.json());
//Middleware do express para utilizar json

app.use(express.urlencoded({extended: true}));

require('./config/database');
//Importanto a conexao com o mongoDB

const rota1 = require('./src/routes/rota1');
//Importando a rota 1

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use('/rota1', rota1);
//Utilizando a rota 1

app.listen(3000, () => {
    console.log('Servidor iniciado');
})
//Servidor ira ouvir a porta 3000