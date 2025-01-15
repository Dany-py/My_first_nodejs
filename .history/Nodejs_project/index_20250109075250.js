
import { PrismaClient } from '@prisma/client';

class UserService {
  constructor() {
    this.prisma = new PrismaClient();
  }

  // ... Existing constructor code ...
}


const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, Backend avec JavaScript sur Codespaces!');
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${port}`);
});