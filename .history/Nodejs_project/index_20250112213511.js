
import { PrismaClient } from '@prisma/client';

class UserService {
  constructor() {
    this.prisma = new PrismaClient();
  }

  // ... Existing constructor code ...
}

// ...

var getUsers = () => this.prisma.user.findMany({
  select: {
    id: true,
    email: true,
    age: true,
  },
});


// ...

var addUser = async (user) => {
    const { password, ...createdUser } = await this.prisma.user.create({
      data: user,
    });
    return createdUser;
  };

// ...

// ...

var getUser = (id) => this.prisma.user.findUnique({
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


const { PrismaClient } = require('@prisma/client');
const express = require('express');

class UserService {
  constructor() {
    this.prisma = new PrismaClient();
  }

  async getUsers() {
    return await this.prisma.user.findMany({
      select: {
        id: true,
        email: true,
        age: true,
      },
    });
  }

  async addUser(user) {
    const { password, ...createdUser } = await this.prisma.user.create({
      data: user,
    });
    return createdUser;
  }

  async getUser(id) {
    return await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        age: true,
      },
    });
  }
}

class UserController {
  constructor(userService) {
    this.userService = userService;
  }

  createUser = async (req, res) => {
    try {
      const user = await this.userService.addUser(req.body);
      return res.status(201).send(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  getUsers = async (_, res) => {
    try {
      const users = await this.userService.getUsers();
      return res.status(200).send(users);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  getUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await this.userService.getUser(Number(id));
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      return res.status(200).send(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  };
}

// Initialisation de l'application Express
const app = express();
const port = 3000;

// Middleware pour parser les données JSON
app.use(express.json());

// Services et contrôleurs
const userService = new UserService();
const userController = new UserController(userService);

// Routes
app.post('/users', userController.createUser);
app.get('/users', userController.getUsers);
app.get('/users/:id', userController.getUser);

// Route par défaut
app.get('/', (req, res) => {
  res.send('Hello, Backend avec JavaScript sur Codespaces!');
});

// Lancement du serveur
app.listen(port, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
