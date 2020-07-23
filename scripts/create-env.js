const fs = require('fs');
const https = require('https');
const yelp = require('yelp-fusion');
fs.writeFileSync('./.env', `API_KEY=${process.env.API_KEY}\n`);
fs.appendFileSync('./.env', `YELP_API_KEY=${process.env.YELP_API_KEY}\n`);
/*
const finderScript = `var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.309083, lng: -121.813027 },
    zoom: 18
  });
}`

function appendFinderScript() {
  fs.appendFileSync('./finder/googlemapsapi.js', finderScript);
} */

const env = require('dotenv').config();
console.log(process.env.API_KEY);
console.log(process.env.YELP_API_KEY);
//appendFinderScript();

/*
https.get("https://maps.googleapis.com/maps/api/js?key=" + process.env.API_KEY + "&callback=initMap", (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
    fs.appendFileSync('./finder/googlemapsapi.js', d);
  });

  }).on('error', (e) => {
  console.error(e);
  }); */


  const searchRequest = {
    term:'Happy Lemon',
    location: 'san jose, ca'
  };
  
  
  const client = yelp.client(process.env.YELP_API_KEY);
  
  
  client.search(searchRequest).then(response => {
    const firstResult = response.jsonBody.businesses;
    const prettyJson = JSON.stringify(firstResult, null, 4);
    console.log(prettyJson);
    console.log(response.jsonBody.total);
  }).catch(e => {
    console.log(e);
  });
  


  


