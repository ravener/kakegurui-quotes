const { getQuotes } = require('../../utils/utils.js');

module.exports = (req, res) => {
  const quotes = getQuotes();
  res.setHeader('Access-Control-Allow-Origin', '*');
  return res.json(quotes.map((quote, id) => ({ id, ...quote })));
};
