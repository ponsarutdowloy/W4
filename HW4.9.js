const express = require('express')
const app = express()

const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@another.com' },
    { id: 3, name: 'Mike Brown', email: 'mike@example.com' },
];

app.get('/users/filter', (req, res) => {
    const domain = req.query.domain
    const filteredUsers = users.filter(user => user.email.endsWith(`@${domain}`))
    if (filteredUsers.length === 0) {
        return res.status(404).json({ message: 'No users found with this domain' })
    }
    res.json(filteredUsers)
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})