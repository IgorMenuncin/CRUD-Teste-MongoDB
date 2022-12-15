const mongoose = require('mongoose');
// Importando o mongoose

const pessoaSchema = mongoose.Schema({
    name: {type: String},
    idade: {type: Number},
    endereco: {type: String},
    telefone: {type: String},
    cpf: {type: String}
})
//Criando o formato do objeto

module.exports = mongoose.model('pessoaModelo', pessoaSchema);
//Exportando o modulo