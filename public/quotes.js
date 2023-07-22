
async function fetchQuotes() {
  const response = await fetch('https://kakegurui-quotes.vercel.app/api/quotes');
  return response.json();
}

const div = document.querySelector('.quotes');
div.innerHTML = '<div class="lds-ripple"><div></div><div></div></div>';

fetchQuotes()
  .then(quotes => {
    div.innerHTML = "";

    for (const { quote, author } of quotes) {
      const blockquote = document.createElement('blockquote');
      blockquote.innerHTML = `<b>“</b>${quote}<b>”</b><p>- <i>${author}<i></p>`;
      div.appendChild(blockquote);
    }
  })
  .catch(() => alert("Failed to fetch quotes. Please refresh the page."));
