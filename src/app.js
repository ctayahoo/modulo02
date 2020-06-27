import express from 'express';
import routes from './routes';
// com ou sem .js

import './database';
// Ou apenas './database' - porque o idex.js dentro dele
// seria puxado implicitamente

class App {
  constructor() {
    this.server = express();
    // o mesmo que const server = express();
    // no modulo01
    this.middlewares();
    this.routes();
    // Que também 'são middlewares'
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
    // routes criado no require acima
    // importando um arquivo externo, o routes.js
  }
}

export default new App().server;
