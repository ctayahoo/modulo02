module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
    // queryInterface é considerado um único elemento, não sendo
    // necessário o uso do return
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password_hash: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    provider: {
      // Quando o provider for um cliente ( false )
      // ou prestador de serviço, provider ( true )
      type: Sequelize.BOOLEAN,
      defaulValue: false,
      // Valor padrão, cliente
      allowNull: false,
    },
    create_at: {
      // O próprio Sequelize preencherá asim como definido no
      // arquivo database.js
      type: Sequelize.DATE,
      allowNull: false,
    },
    update_at: {
      // O próprio Sequelize preencherá asim como definido no
      // arquivo database.js
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('users'),
  // queryInterface é considerado um único elemento, não sendo
  // necessário o uso do return
};
