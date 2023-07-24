
async function fetchQuotes() {
  const response = await fetch('https://kakegurui-quotes.vercel.app/api/quotes');
  return response.json();
}

function getName(name) {
  return name.split(' ').map(w => w.toLowerCase()).join('_');
}

const div = document.querySelector('.quotes');
div.innerHTML = '<div class="lds-ripple"><div></div><div></div></div>';

fetchQuotes()
  .then(quotes => {
    div.innerHTML = "";

    for (const { quote, author } of quotes) {
      const blockquote = document.createElement('blockquote');
      blockquote.innerHTML = `<div class="thumbnail"><img src="/img/${getName(author)}.png"></div><div class="content"><b>“</b>${quote}<b>”</b><p>- <i>${author}<i></p></div>`;
      div.appendChild(blockquote);
    }
  })
  .catch(() => alert("Failed to fetch quotes. Please refresh the page."));
