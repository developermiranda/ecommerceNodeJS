const Customer = require('./../../schemas/customer')

module.exports = (req, res) => {
  Customer
      .findOne({
        slug: req.params.slug
      })
      .then((customer) => {
        if (!customer) {
          return res.redirect('/')
        }
        return res.render('account/my-account', {
          title: 'My Account',
          customer: customer,
          layout: 'layout/main'
        })
      })
      .catch((error) => {
        return ''
      })
}
