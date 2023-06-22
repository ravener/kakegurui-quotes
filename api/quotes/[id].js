const { getQuotes } = require('../../utils/utils.js');

module.exports = (req, res) => {
  const quotes = getQuotes();
  const id = parseInt(req.query.id);
  const quote = quotes[id];

  if (!quote) {
    return res.status(404).json({
      status: 404,
      message: "Not Found"
    });
  }

  return res.json({ id, ...quote });
};
