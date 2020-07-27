async function getBusinessResults() {
    const url = '../.netlify/functions/yelp';
    try {
        const response = await fetch(url);
        console.log(response);
        const data = await response.json();
        return data;
    } catch(err) {
        console.log(err);
    }
}

getBusinessResults()
    .then(data => console.log(data))
    .catch(reason => console.log(reason.message))