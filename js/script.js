// Array containing several quote objects
const quotes = [
  {
    quote: "Your time is limited, so don’t waste it living someone else’s life.",
    source: "Steve Jobs",
    citation: "Stanford Commencement Address",
    year: 2005
  },
  {
    quote: "Only time (whatever that may be) will tell.",
    source: "Stephen Hawking",
    citation: "A Brief History of Time",
    year: 1988
  },
  {
    quote: "None but ourselves can free our minds.",
    source: "Bob Marley",
    citation: "Redemption Song",
    year: 1979
  },
  {
    quote: "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    source: "Winston Churchill",
    year: 1945
  },
  {
    quote: "When you tear out a man's tongue, you are not proving him a liar, you're only telling the world that you fear what he might say",
    source: "Tyrion Lannister",
    citation: "Game Of Thrones"
  },
  {
    quote: "It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own.",
    source: "Marcus Aurelius"
  },
  {
    quote: "We are more often frightened than hurt; and we suffer more in imagination than in reality",
    source: "Seneca"
  },
  {
    quote: "The happiness of your life depends upon the quality of your thoughts.",
    source: "Marcus Aurelius"
  },
  {
    quote: "It's not what happens to you, but how you react to it that matters.",
    source: "Epictetus"
  }
];


/**
 * Returns a random quote from the quotes array.
 * @return {object} A randomly selected quote object from the quotes array.
 */
function getRandomQuote() {
  const randNum = Math.floor(Math.random() * (quotes.length));
  return quotes[randNum];
}


/**
 * Prints a random quote in the screen.
 */
function printQuote() {
  let quote = getRandomQuote();
  let htmlString = `<p class="quote">${quote.quote}</p><p class="source">${quote.source}`;
  if (quote.citation) htmlString += `<span class="citation"> ${quote.citation} </span>`;
  if (quote.year) htmlString += `<span class="year"> ${quote.year} </span>`;
  htmlString += `</p>`;
  document.getElementById('quote-box').innerHTML = htmlString;
}

// Click event listener for the print quote button
document.getElementById('load-quote').addEventListener("click", printQuote, false);