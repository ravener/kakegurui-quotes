
async function fetchQuotes() {
  const response = await fetch('https://kakegurui-quotes.vercel.app/api/quotes');
  return response.json();
}

fetchQuotes()
  .then(quotes => {
    const div = document.querySelector('.quotes');

    for (const { quote, author } of quotes) {
      const blockquote = document.createElement('blockquote');
      blockquote.innerHTML = `<b>“</b>${quote}<b>”</b><p>- <i>${author}<i></p>`;
      div.appendChild(blockquote);
    }
  })
  .catch(() => alert("Failed to fetch quotes. Please refresh the page."));
