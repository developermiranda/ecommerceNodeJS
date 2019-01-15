const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  return res.render('account/index', {
    title: 'Account',
    layout: 'layouts/main'
  });
})

router.get('/new', (req, res) => {
  return res.render('account/new', {
    title: "Account - Register",
    layout: 'layouts/main'
  })
})

module.exports = router
