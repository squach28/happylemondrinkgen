async function getBusinessResults() {
    const url = './.netlify/functions/yelp';
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch(err) {
        console.log(err);
    }
}

console.log(getBusinessResults());