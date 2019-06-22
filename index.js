const express = require('express')
const helmet = require('helmet')

const cors = require('./src/middleware/cors')
require('./src/db/mongoose')
const auth = require('./src/routes/auth')

const api = express()
const port = process.env.PORT

// Basic Middleware
api.use(helmet())
api.use(express.json())
api.use(cors)

// Basic route
api.get('/', (req, res) => {
    res.send({
        name: 'FullyCharged API'
    });
});

// API routes
api.use('/auth', auth)


api.listen(port, () => {
    console.log('Server is up on port ' + port)
})
