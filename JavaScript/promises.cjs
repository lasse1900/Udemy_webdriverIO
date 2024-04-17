
const axios = require('axios');

const users = ['user1', 'user2', 'user3']

const getUsers = () => {
    setTimeout(() => {
        users.forEach(user => {
            console.log(user)
        }, 1000)
    })
}

const createUser = (user, callback) => {
    setTimeout(() => {
        users.push(user)
        callback()
    },2000)
}

createUser('user4', getUsers)

console.log('Fetching data - started');

const getTodos = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    console.log('My todo data:', response.data); // Log the fetched data
}

// Call the asynchronous function and handle the end of fetching
getTodos()
    .then(() => {console.log('Fetching data - ended')
});

// -------------- Part 2 ------------

const getTodos2 = async () => {
    return new Promise((resolve, reject) => {
        const response = axios.get('https://jsonplaceholder.typicode.com/todos/1', (err, data) => {
            if (err) reject(data)

            resolve(data)
        })
    })
}

console.log(getTodos2())

getTodos2()
    .then(response => console.log(response))
