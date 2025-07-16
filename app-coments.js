// Importa o framework Express para criar o servidor web
import express from 'express';

// Importa o engine de templates Handlebars para renderizar views
import exphbs from 'express-handlebars';

// Importa a conexão com o banco de dados (arquivo conn.js)
import conn from './db/conn.js';

// Cria uma instância do aplicativo Express
const app = express();

// Configura o Handlebars como engine de templates
// 'exphbs.engine()' cria uma instância configurada do Handlebars
app.engine('handlebars', exphbs.engine());

// Define 'handlebars' como a view engine padrão do Express
// Isso permite usar .handlebars como extensão dos arquivos de view
app.set('view engine', 'handlebars');

// Configura o middleware para processar dados de formulários HTML
// 'extended: true' permite o parsing de objetos complexos
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Configura o middleware para processar JSON no corpo das requisições
// Permite que a API receba e interprete dados no formato JSON
app.use(express.json());

// Configura o middleware para servir arquivos estáticos (CSS, JS, imagens)
// Todos os arquivos na pasta 'public' ficarão acessíveis diretamente
app.use(express.static('public'));

// Inicia o servidor na porta 3000
// Quando o servidor estiver rodando, ele ficará ouvindo requisições nesta porta
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
