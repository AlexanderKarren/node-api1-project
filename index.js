const express = require('express');

const server = express();

let users = [
    {
        id: 1,
        name: "Bill Withers",
        bio: "American singer-songwriter"
    }
]

server.use(express.json())

// return all users
server.get('/api/users', (req, res) => {
    res.status(200).json(users);
})

// return one user by ID
server.get('/api/users/:id', (req, res) => {
    const user = (users.find(user => (req.params.id === user.id.toString())));
    if (user) res.status(200).json(user);
    else res.status(404).json({ errorMessage: `Could not find user with ID: ${req.params.id}`})
})

// add new user, 400 if name and bio aren't present
server.post('/api/users', (req, res) => {
    if (req.body.hasOwnProperty("name") && req.body.hasOwnProperty("bio")) {
        const user = {
            id: users[users.length - 1].id + 1,
            ...req.body
        }
        users.push(user);
        res.status(201).json(user);
    }
    else {
        res.status(400).json({errorMessage: "Please provide name and bio for the user." })
    }
})

// remove user, return removed user
server.delete('/api/users/:id', (req, res) => {
    const user = users.find(user => (user.id.toString() === req.params.id))
    users = users.filter(user => (user.id.toString() !== req.params.id))
    if (user) res.status(201).json(user);
    else res.status(404).json({ errorMessage: `Could not find user with ID: ${req.params.id}`})
})

server.listen(5000, () => {
    console.log(`server running on port ${5000}`)
})