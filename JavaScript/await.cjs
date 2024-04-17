const axios = require('axios');

const getTodos = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    return res.data; // Return data directly
}

getTodos().then(data => {
    console.log(data); // Log the data fetched by getTodos3
});
