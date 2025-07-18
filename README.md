# MVC

MVC (Model, View, Controller) é um padrão de arquitetura de software para organização de aplicação.

#### Model

Faz as requisições com o banco de dados, fazendo o CRUD de acordo com as regras dadas pela **Controller**

#### View

Apenas renderiza o ambiente visual para o usuárioe de acordo com as regras dadas pela **Controller**. Também passar para a _controller_ interações que o usuário faz com a aplicação

#### Controller

Faz o intermédio entre entregar e receber os dados da **Model** e renderizar ao usuário o conteúdo através das **Views**

## Exemplo do projeto

Usaremos:

- **express** para servidor e rotas
- **express-handlebars** para renderização das views
- **sequelize** para conexão com banco de dados
- **mysql2** para usar o MySql junto com o **sequelize**
- **nodemon** para ambiente de dev
- **dotenv** para os dados do banco

```javascript
npm install express express-handlebars sequelize mysql2 nodemon dotenv
```

## Estrutura

app/
├── controllers/
├── db/
│ └── conn.js
├── models/
├── routes/
└── views/
