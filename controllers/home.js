/**
 * GET /
 * Home page.
 */
var rates =  require('../models/rates')
exports.index = (req, res) => {
  res.render('home', {
    title: 'HOME',
    rates: rates
  });
};
