
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

//const userRoutes = require('./routes/userRoutes')
const eventRoutes = require('./routes/eventRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(bodyParser.json());

// Utiliser les routes
//app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes);
app.use('/api/event', eventRoutes);

module.exports = app;
