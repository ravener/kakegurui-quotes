// Cache.
let quotes;

const fs = require('node:fs');

function getQuotes() {
  if (quotes) return quotes;
  quotes = fs.readFileSync('quotes.json');
  return quotes;
}

module.exports = { getQuotes };
