import Sequelize from 'sequelize';
// Importando Sequelize, sempre lembrando que 'sequelize' esta
// dentro de node_modules e este caminho não precisa ser explicitado
// provavelmente devido ao uso do yarn ou npm

import User from '../app/models/User';
// Importando o Model User

import databaseConfig from '../config/database';

const models = [User];
// Um array que armazenará todos os models importados

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    // Criando uma conexão EXPLICITA do Sequelize com o bd

    models.map((model) => model.init(this.connection));
    // Este parâmetro 'model' da arrow function se refere cada
    // um dos models gravados no array, no caso, de um primeiro
    // teste, do model User, passando a conexão para o método init
    // de User.js - O model
  }
}

export default new Database();
