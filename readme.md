O projeto possui as bibliotecas:
    express: utilizado para desenvolver
    nodemon: utilizado para rodar o servidor e ver atualizacoes em tempo real
    mongoose: que faz a ligação entre o express e o mongoDB
    ejs: responsavel pela visualizacao do formulario e dos resultados

Para configurar:
    O projeto esta configurado para usar um dbs no mongoDB chamado trabalhoBanco, essa configuração se encontra no arquivo config/database.js, crie um dbs com esse nome ou altere nas configurações para um que voce queira
    O projeto esta configurado para usar a porta 3000, caso queira trocar acesse o arquivo app.js

Para subir o servidor digite o comando 'npx nodemon' no terminal

Depois acesse a url: localhost:3000/rota1/ para acessar o menu, e então escolha se quer cadastrar uma pessoa ou ver as que estão cadastradas em seu banco de dados