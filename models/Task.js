// Importa o tipo de dados do Sequelize para definir os campos do modelo
import DataTypes from 'sequelize';

// Importa a conexão com o banco de dados (instância do Sequelize)
import db from '../db/conn.js';

// Define o modelo 'Task' (tabela no banco de dados)
const Task = db.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  done: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

// Exporta o modelo para ser usado em outras partes da aplicação
export default Task;
