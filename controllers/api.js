const { promisify } = require('util');
const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
/**
 * GET /api/refreshrates
 * 
 */
exports.refreshrates = (req, res, next) => {
  request.get('https://openexchangerates.org/api/latest.json?app_id=524b49795361492eb5c8907b690f40e7&symbols=USD,PLN,EUR,CZK', (err, request, body) => {
    if (err) { return next(err); }
    //console.log(body);
    fs.writeFile('models/rates.json', body, 'utf8', function (ref) {
      if (!ref) {
        res.send('{"status":"Ok","message":"Rates are successfully updated."}');
      } else {
        es.send('{"status":"error","message":"Something went wrong."}');
      }
    });
  });
};


