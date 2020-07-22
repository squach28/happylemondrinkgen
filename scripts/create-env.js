const fs = require('fs');
const https = require('https');
fs.writeFileSync('./.env', `API_KEY=${process.env.API_KEY}\n`);

const env = require('dotenv').config();
console.log(process.env.API_KEY);



const finderScript = `var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.309083, lng: -121.813027 },
    zoom: 18
  });
}`

function appendFinderScript() {
  fs.appendFileSync('./finder/googlemapsapi.js', finderScript);
}


https.get("https://maps.googleapis.com/maps/api/js?key=" + process.env.API_KEY + "&callback=initMap", (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
    fs.appendFileSync('./finder/googlemapsapi.js', d);
  });

  }).on('error', (e) => {
  console.error(e);
  });

  setTimeout(appendFinderScript, 3000);



  


