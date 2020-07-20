const fs = require('fs');
fs.writeFileSync('./.env', `API_KEY=${process.env.API_KEY}\n`);

const env = require('dotenv').config();
console.log(process.env.API_KEY);

