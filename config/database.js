const mongoose = require('mongoose');
//Importando o mongoose, ferramenta que conecta o express ao mongoDB

mongoose.Promise = global.Promise;
//Definindo que a Promise que o mongoose ira utilizar sera a global

mongoose.connect('mongodb://localhost/trabalhoBanco', { useNewUrlParser: true, useUnifiedTopology: true})
    .then( () => console.log('Conectado ao MongoDB'))
    .catch( (err) => console.error(err));
//Conectando o mongoose ao banco local chamado 'Trabalho banco'