import express from 'express';
import exphbs from 'express-handlebars';
import conn from './db/conn.js';
import Task from './models/Task.js';
import taskRouter from './routes/TaskRoutes.js';

const app = express();

// Configura o Handlebars como engine de templates
// 'exphbs.engine()' cria uma instância configurada do Handlebars
// Define 'handlebars' como a view engine padrão do Express
// Isso permite usar .handlebars como extensão dos arquivos de view
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(
  express.urlencoded({
    extended: true,
  })
);

// Configura o middleware para processar dados de formulários HTML
// 'extended: true' permite o parsing de objetos complexos
app.use(express.json());

app.use(express.static('public'));

// Routes
app.use('/tasks', taskRouter);

conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch(console.log);
