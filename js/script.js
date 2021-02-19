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
    source: "Marcus Aurelius",
    tags: ['stoicism', 'wisdom']
  },
  {
    quote: "We are more often frightened than hurt; and we suffer more in imagination than in reality",
    source: "Seneca",
    tags: ['stoicism', 'wisdom']
  },
  {
    quote: "The happiness of your life depends upon the quality of your thoughts.",
    source: "Marcus Aurelius",
    tags: ['stoicism', 'wisdom']
  },
  {
    quote: "It's not what happens to you, but how you react to it that matters.",
    source: "Epictetus",
    tags: ['stoicism', 'wisdom']
  }
];

// Variable to represent seconds left until new random quote will be fetched
let countdown = 10;

// These variables will be assigned an ID to use in clearInterval() later on to reset the timer and displayed countdown
let backgroundChangeID = null;
let countdownDisplayID = null;

/**
 * Returns a random quote from the quotes array
 * @return {object} A randomly selected quote object from the quotes array
 */
function getRandomQuote() {
  const randNum = Math.floor(Math.random() * (quotes.length));
  return quotes[randNum];
}

/**
 * Prints a random quote in the screen
 */
function printQuote() {
  let quote = getRandomQuote();
  let htmlString = `<p class="quote">${quote.quote}</p><p class="source">${quote.source}`;
  if (quote.citation) htmlString += `<span class="citation"> ${quote.citation} </span>`;
  if (quote.year) htmlString += `<span class="year"> ${quote.year} </span>`;
  htmlString += `</p>`;
  if (quote.tags) htmlString += `<p class="tags"> &#35;${quote.tags.join('&#35')} </p>`; // extra code to display tags, if any
  htmlString += `<p id="timer">random quote in: ${countdown}</p>`; // extra code to display a countdown for next random quote
  document.getElementById('quote-box').innerHTML = htmlString;
}

/**
 * Returns a random color in rgb format
 * @return {string} A randomly generated color
 */
function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

/**
 * Changes backgrounds color to a randomly selected color
 */
function changeBackgroundColor() {
  document.body.style.backgroundColor = generateRandomColor();
}

/**
 * Starts the countdown and timer to generate a random quote and change the background color after 10 seconds
 */
function manageTime() {
  backgroundChangeID = setInterval(() => {
    printQuote();
    changeBackgroundColor();
    countdown = 11;
  }, 10000);
  
  countdownDisplayID = setInterval(() => {
    countdown -= 1;
    document.querySelector('#timer').innerHTML = `random quote in: ${countdown}`;
  }, 1000)
}

// Click event listener to fetch new random quote, change background color, and reset countdown and timer 
document.getElementById('load-quote').addEventListener("click", () => {
  // clearInterval is used to reset the timer and displayed countdown
  clearInterval(countdownDisplayID);
  clearInterval(backgroundChangeID);
  printQuote();
  changeBackgroundColor();
  countdown = 10;
  document.querySelector('#timer').innerHTML = `random quote in: ${countdown}`;
  manageTime();
})

// Start countdown and timer the first time the page loads
manageTime();
