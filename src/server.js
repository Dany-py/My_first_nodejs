const app = require('./app');
require('dotenv').config();
const jwtSecret = process.env.SECRET_KEY

const PORT = process.env.PORT || 3000;

//fetch('http://localhost:3000/api/auth/register', {
//    method: 'POST',
//    headers: {
//        'Content-Type': 'application/json',
//        'Authorization': jwtSecret
//    },
//    body: JSON.stringify({
//        "name": "Dan",
//        "email": "dand@gmail.com",
//        "password": "040501"
//    })
//}).then(response => response.json())
//.then(data => console.log(data))

//fetch('http://localhost:3000/api/auth/login', {
//    method: 'POST',
//    headers: {
//        'Content-Type': 'application/json',
//        'Authorization': 'Bearer ' + jwtSecret
//    },
//    body: JSON.stringify({
//        "email": "dand@gmail.com",
//        "password": "040501"
//    })
//}).then(response => response.json())
//.then(data => console.log(data))

//fetch('http://localhost:3000/api/eventPrices', {
//    method: 'POST',
//    headers: {
//        'Content-Type': 'application/json',
//    },
//    body: JSON.stringify([
//        {
//            "eventId": 1,
//            "priceType": "Standard",
//            "price": 50
//        },
//        {
//            "eventId": 1,
//            "priceType": "VIP",
//            "price": 100
//        },
//        {
//            "eventId": 1,
//            "priceType": "Réduit",
//            "price": 30
//        }
//   ])
//})
//.then(data => {
//    console.log('Données reçues :', data);
//})
//.catch(error => {
//    console.error('Erreur :', error);
//});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

