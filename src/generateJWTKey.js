require('dotenv').config();
const jwt = require('jsonwebtoken');

const jwtSecret = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMjMsInVzZXJuYW1lIjoiQm9vbXVwX0VyaWNrYSIsImV4cCI6MTc0MDcwMDgwMCwiaWF0IjoxNzM3OTk4NTQ3fQ.6Bw6fQOvM2CRQ653hF06WiScnKZc1aVTFWopfz6O10A'//process.env.REFRESH_TOKEN_SECRET;
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMjMsInVzZXJuYW1lIjoiQm9vbXVwX0VyaWNrYSIsImV4cCI6MTc0MDcwMDgwMCwiaWF0IjoxNzM3OTk4NTQ3fQ.6Bw6fQOvM2CRQ653hF06WiScnKZc1aVTFWopfz6O10A'
const tocken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMTIzIiwidXNlcm5hbWUiOiJ1dGlsaXNhdGV1cl9tb2JpbGUiLCJleHAiOjE3NjcxMzkxODAsImlhdCI6MTczNzYyODI1NH0.ku4rM9DZhvwxAgBrb6VJ6o8pIsSt4uYQ1DHNXYyb6YA'


try{
    //console.log(jwtSecret)
    //const verifier = jwt.verify(token, tocken)
    const verifié = jwt.verify(tocken, jwtSecret)
    console.log(verifier)
    console.log(verifié)
}   catch(error) {
    console.log(error)
}
//const verifier = jwt.verify(token, jwtSecret)
//console.log(verifier)
