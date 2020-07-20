const fs = require('fs');
const https = require('https');
fs.writeFileSync('./.env', `API_KEY=${process.env.API_KEY}\n`);

const env = require('dotenv').config();
console.log(process.env.API_KEY);
var loadMapString = `
// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=` + process.env.API_KEY + `&callback=initMap';
script.defer = true;
script.async = true;

// Attach your callback function to the window object
window.initMap = function() {
  // JS API is loaded and available
};

// Append the script element to head
document.head.appendChild(script); `;

fs.writeFile("scripts/../finder/loadmap.js", loadMapString, function(err) {
    if(err) throw err;
    console.log('file created!');
});

fs.writeFile('testfile.txt', 'Hello World', function(err) {
  if(err) throw err;
  console.log('test file made');
})



