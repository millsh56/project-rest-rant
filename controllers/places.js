const router = require('express').Router()
const places = require('../models/places.js')


// NEW
router.get('/new', (req, res) => {
  res.render('places/new')
})

// GET /places
router.get('/', (req, res) => {      
    res.render('places/index', {places})
  })  
  

// POST /places
  router.post('/', (req, res) => {
    // console.log(req.body)
    if(!req.body.pic) {
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('POST /places')
  })
  

module.exports = router







  

