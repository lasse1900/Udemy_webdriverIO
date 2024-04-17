const axios = require('axios'); 

const getTodos3 = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        return response.data; // Return data on successful request
    } catch (error) {
        throw error; // Throw error if request fails
    }
}

// Calling getTodos2 inside an async function
const fetchData = async () => {
    try {
        console.log(await getTodos3()); // Log the data fetched by getTodos2
    } catch (error) {
        console.error('Error fetching data:', error); // Log error if request fails
    }
}

fetchData(); // Call fetchData to start the process

//****************************************************/
// const axios = require('axios');

const getTodos = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => {
                resolve(response.data); // Resolve with data on successful request
                // console.log(response.data)
            })
            .catch(error => {
                reject(error); // Reject with error if request fails
            });
    });
};

// Calling getTodos4 inside a promise chain
const fetchData2 = () => {
    getTodos()
        .then(data => {
            console.log(data); // Log the data fetched by getTodos4
        })
        .catch(error => {
            console.error('Error fetching data:', error); // Log error if request fails
        });
};

fetchData2(); // Call fetchData2 to start the process


