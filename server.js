// Dependecies
const express = require('express')
const path = require('path')
const http = require('http')
const bodyParser = require('body-parser')

// Create app
const app = express()

// API Routes
const api = require('./server/routes/api')
app.use('/api', api)

// Parsers for POST data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')))

// Catch other routes and return index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

// Config Port 3000 or env.Port
const port = process.env.PORT || '3000'
app.set('port', port)

// Create HTTP server
const server = http.createServer(app)

// Listen provided port
server.listen(port, () => console.log(`API running on localhost:${port}`))
