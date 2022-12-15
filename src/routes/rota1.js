const express = require('express');

const router = express.Router();

const pessoaModelo = require('../models/pessoa');


router.get('/', async (req, res) => {
    console.log('inicio');
    try {
        res.status(200).render('menu');
    }
    catch (error) {
        res.status(500).json(error);
    }
})

router.get('/leitura', async (req, res) => {
    console.log('get ativado');
    try {
        let pessoa = await pessoaModelo.find({});
        res.status(200).render('leitura', {pessoa: pessoa});
    }
    catch (error) {
        res.status(500).json(error);
    }
})

router.get('/cadastro', async (req, res) => {
    try {
        let pessoa = new pessoaModelo();
        res.status(200).render('cadastro', {title: 'Cadastro de usuário', pessoa: pessoa});
    }
    catch (error) {
        res.status(500).json(error);
    }
})

router.post('/', async (req, res) => {
    let {name} = req.body.pessoa;
    let {idade} = req.body.pessoa;
    let {endereco} = req.body.pessoa;
    let {telefone} = req.body.pessoa;
    let {cpf} = req.body.pessoa;
    let pessoa = new pessoaModelo({name, idade, endereco, telefone, cpf});
    try {
        await pessoa.save();
        res.redirect('/rota1/cadastro');
    }
    catch (error) {
        res.status(500).json(error);
    }
})

router.put('/', async (req, res) => {
    console.log('chamada put');
    try {
        res.status(200).json(req.body);
    }
    catch (error) {
        res.status(500).json(error);
    }
})

router.delete('/', async (req, res) => {
    console.log('chamada delete');
    try {
        res.status(200).json(req.body);
    }
    catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;