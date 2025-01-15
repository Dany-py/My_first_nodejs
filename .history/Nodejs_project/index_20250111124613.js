
import { PrismaClient } from '@prisma/client';

class UserService {
  constructor() {
    this.prisma = new PrismaClient();
  }

  // ... Existing constructor code ...
}

// ...

getUsers = () => this.prisma.user.findMany({
    select: {
      id: true,
      email: true,
      age: true,
    },
  });

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

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, Backend avec JavaScript sur Codespaces!');
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});