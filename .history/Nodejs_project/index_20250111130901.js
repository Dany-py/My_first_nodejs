
import { PrismaClient } from '@prisma/client';

class UserService {
  constructor() {
    this.prisma = new PrismaClient();
  }

  // ... Existing constructor code ...
}

// ...

getUsers() {
  return this.prisma.user.findMany({
    select: {
      id: true,
      email: true,
      age: true,
    },
  });};

// ...

// ...

addUser = async (user) => {
    const { password, ...createdUser } = await this.prisma.user.create({
      data: user,
    });
    return createdUser;
  };

// ...

// ...

getUser = (id) => this.prisma.user.findUnique({
  where: { id },
  select: {
    id: true,
    email: true,
    age: true,
  },
});

// ...

class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  createUser = async (req, res) => {
    try {
      const user = await this.userService.addUser(req.body);
      return res.status(201).send(user);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  getUsers = async (_, res) => {
    try {
      const users = await this.userService.getUsers();
      return res.status(200).send(users);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  getUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await this.userService.getUser(Number(id));
      return res.status(200).send(user);
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
}

export default UserController;

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, Backend avec JavaScript sur Codespaces!');
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});