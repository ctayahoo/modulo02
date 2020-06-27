module.exports = {
  dialect: 'postgres',
  // Para usar o postgres com o Sequelize ainda é
  // necessário instalar mais dois pacotes
  // pg e pg-hstore
  host: '192.168.99.100',
  username: 'postgres',
  password: 'docker',
  database: 'goBarber',
  define: {
    timestamp: true,
    // Isso indica ao Sequelize para sempre criar duas colunas na tabelas
    // create_at e update_at -> quando o registro foi criado e modificado
    underscored: true,
    // Isso indica que se tivermos um Model userGroup ele irá criar
    // uma tabela user_group e não userGroup - Só pra complicar...
    underscoredAll: true,
    // A mesma coisa de cima mas para colunas erelacionamentos
  },
};
