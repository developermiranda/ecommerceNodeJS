const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  return res.render('main/index', {
    title: 'Teste Ecommerce',
    layout: 'layouts/base'

  })
})

router.get('/layout2', (req, res) => {
  return res.render('layout/base', {
  title: 'Teste Layout 2',
  layout: 'layouts/main'
  })
})

module.exports = router
