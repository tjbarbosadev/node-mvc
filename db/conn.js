import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME, // Nome do banco
  process.env.DB_USER, // Usuário
  process.env.DB_PASSWORD, // Senha
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

// Versão com async/await (recomendado)
export const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conectado ao banco com sucesso');
    return true;
  } catch (err) {
    console.error('❌ Falha na conexão:', err);
    return false;
  }
};

export default sequelize;
