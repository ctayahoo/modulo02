import { Sequelize, Model } from 'sequelize';
// import Squelize, { Model } from 'sequelize';
// Esta foi a forma usada pelo Diego
// Por um breve momento o intellisensi idicou esta maneira

class User extends Model {
  static init(sequelize) {
    // Teoricamente poderei usar init sem criar um objeto com
    // new, retornar aqui qdo descobrir. É usado staticamente
    // no arquivo ./src/database/index.js
    // O Parâmetro acima, 'sequelize' se refere a uma conexão
    // EXPLICITA do Sequelize com o bd
    super.init(
      // super.init chama o init da classe pai, Model
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      // Primeiro parâmetro de super.init
      {
        sequelize,
      },
      // Segundo parâmetro de super.init
    );
  }
}

export default User;
