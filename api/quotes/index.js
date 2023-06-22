const { getQuotes } = require('../../utils/utils.js');

module.exports = (req, res) => {
  const quotes = getQuotes();
  return res.json(quotes.map((quote, id) => ({ id, ...quote })));
};
