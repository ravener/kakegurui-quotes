// Cache.
let quotes;

const fs = require('node:fs');

function getQuotes() {
  if (quotes) return quotes;
  quotes = JSON.parse(fs.readFileSync('quotes.json', 'utf8'));
  return quotes;
}

module.exports = { getQuotes };
