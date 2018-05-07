/**
 * GET /
 * Home page.
 */
var rates =  require('../models/rates')
exports.index = (req, res) => {
  console.log(req.body)
  res.render('home', {
    title: 'HOME',
    rates: rates
  });
};
