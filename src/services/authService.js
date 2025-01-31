const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const served = require('../services/userService');


const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
      // Hachage du mot de passe
      const hashedPassword = await bcrypt.hash(password, 10);
      
      // Création de l'utilisateur
      const user = await served.createUser({ name, email, password: hashedPassword });

      // Génération des tokens
      const accessToken = jwt.sign({ userId: user.id }, process.env.ACCESS_TOKEN, { expiresIn: process.env.ACCESS_TOKEN_EXPIRES });
      const refreshToken = jwt.sign({ userId: user.id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: process.env.REFRESH_TOKEN_EXPIRES });

      // Mise à jour de l'utilisateur avec le refresh token
      const userData = {
          id: user.id,
          name: user.name,
          email: user.email,
          accessToken: accessToken,
          refreshToken: refreshToken
      };

      await served.updateUser(user.id, userData);

      // Réponse avec les tokens
      res.status(201).json({ message: 'User registered successfully', accessToken, refreshToken });
  } catch (error) {
      res.status(400).json({ error: 'User registration failed', details: error.message });
  }
};  


const login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
      // Vérifier si l'utilisateur existe
      const user = await served.getUserByEmail(email);
      if (!user) {
          return res.status(404).json({ error: 'User not found' });
      }

      // Vérifier si le mot de passe est valide
      const validPassword = await bcrypt.compare(password, user.password);      
      if (!validPassword) {
          return res.status(401).json({ error: 'Invalid credentials' });
      }

      // Génération des tokens
      const accessToken = user.accessToken
      const refreshToken = user.refreshToken

      // Réponse avec les tokens
      res.status(200).json({ accessToken, refreshToken });
  } catch (error) {
    res.status(400).json({ error: 'Login failed', details: error.message });
  }
};

const logout = async (req, res) => {
  try {
    // Récupérer le token de l'en-tête Authorization
    const authHeader = req.get('Authorization');
    if (!authHeader) return res.status(401).json({ error: 'Authorization header missing' });

    const token = authHeader //.split(' ')[1]; Format attendu : "Bearer <token>"
    if (!token) return res.status(401).json({ error: 'Token missing' });

    // Option : Ajouter le token à une liste noire (si applicable)
    // Exemple avec une base de données :
    // await prisma.tokenBlacklist.create({ data: { token } });

    // Si vous n'utilisez pas de liste noire :
    // Le frontend doit supprimer localement le token après cette réponse.

    return res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    res.status(500).json({ error: 'Logout failed', details: error.message });
  }
};



module.exports = { register, login, logout };



/**
 * 
 * 
//const accessToken = jwt.sign({ userId: user.id }, process.env.ACCESS_TOKEN, process.env.ACCESS_TOKEN_EXPIRES);
      //const refreshToken = jwt.sign({ userId: user.id }, process.env.REFRESH_TOKEN_SECRET, process.env.REFRESH_TOKEN_EXPIRES);

      //await served.updateUser(user.id, { refreshToken }); 
      //res.status(200).json({ accessToken, refreshToken });


        // Vérifier et générer un nouveau access token
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decodedRefresh) => {
          if (err) {
            return res.status(403).json({ error: 'Invalid refresh token' });
          }

          return res.status(200).json({ accessToken: newAccessToken });
        });
        return;
      }

          const newAccessToken = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '15m' }
          );
 */
