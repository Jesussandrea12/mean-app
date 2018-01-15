const express = require('express')
const router = express.Router()

// axios
const axios = require('axios')
const API = 'https://jsonplaceholder.typicode.com'

router.get('/', (req, res) => {
  res.send('api works')
})

// get post
router.get('/posts', (req, res) => {
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data)
    })
    .catch(error => {
      res.status(500).send(error)
    })
})

module.exports = router
