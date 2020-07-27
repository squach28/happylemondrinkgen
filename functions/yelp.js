require('dotenv');
const yelp = require('yelp-fusion');

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
    return response.jsonBody.businesses;
  }).catch(e => {
    console.log(e);
  });