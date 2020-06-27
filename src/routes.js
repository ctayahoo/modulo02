import { Router } from 'express';
// Importando apenas Router de express
// Não é necessário, aqui, o express inteiro

// * Para teste
import User from './app/models/User';
// Importando o  model User

const routes = new Router();

// routes.get('/', (req, res) => res.json({ message: 'Ola mundo Davi' }));

// * Para teste
routes.get('/', async (req, res) => {
  // Definindo como asyncrona esta função para usar o
  // await antes de qualquer operação no bd
  const user = await User.create({
    name: 'Carlos Timóteo Arruda',
    email: 'carlos.t.arruda@gmail.com',
    password_hash: '31231231444',
  });
  return res.json(user);
});

export default routes;
