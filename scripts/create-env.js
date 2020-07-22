const fs = require('fs');
const https = require('https');
fs.writeFileSync('./.env', `API_KEY=${process.env.API_KEY}\n`);

const env = require('dotenv').config();
console.log(process.env.API_KEY);
console.log(https.get('https://maps.googleapis.com/maps/api/js?key=' + process.env.API_KEY + '&callback=initMap'));





