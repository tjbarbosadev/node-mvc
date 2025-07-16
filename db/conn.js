import Sequelize from 'sequelize';

const sequelize = new Sequelize('nodemvc', 'root', 'admin123', {
  host: 'localhost',
  dialect: 'mysql',
});

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

// Testa a conexão ao iniciar (opcional)
testConnection();

export default sequelize;
