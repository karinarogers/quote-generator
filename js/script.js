/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/* declare an array of quote objects with properties */
const quotes = [
  {
    quote: "All our dreams can come true, if we have the courage to pursue them.",
    source: "Walt Disney",
    citation: "(2020). The Best Quotes from Walt Disney About Life, Courage, and Imagination. Southern Living. https://www.southernliving.com/culture/walt-disney-quotes",
    year: "2020",
    tags: "walt disney mickey mouse"
  },
  {
    quote: "It's kind of fun to do the impossible.",
    source: "Walt Disney"
  },
  {
    quote: "If you can dream it, you can do it.",
    source: "Walt Disney"
  },
  {
    quote: "Laughter is timeless, imagination has no age, and dreams are forever.",
    source: "Walt Disney"
  },
  {
    quote: "First, think. Second, believe. Third, dream. And finally, dare.",
    source: "Walt Disney"
  }
];

/* generates random number that corresponds to quote index values */
let quote;
function getRandomQuote(array) {
  quote = Math.floor(Math.random() * array.length);
  randomObject = array[quote];
  return randomObject;
}
/* testing */
// console.log(getRandomQuote(quotes));


/* generates a random color */
function getRandomColor() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}
/* testing */
//console.log(getRandomColor());


/* inserts quote into html and changes background color*/
function printQuote() {
  const randomQuote = getRandomQuote(quotes);

  const wording = `
  <p class = "quote">${randomQuote.quote}</p>
  <p class = "source">${randomQuote.source} 
  ${randomQuote.citation ? `<span class="citation">${randomQuote.citation}</span>` : `</p >`}
  ${randomQuote.year ? `<span class="year">${randomQuote.year}</span>` : `</p >`}
  ${randomQuote.tags ? `<span class="tags">${randomQuote.tags}</span></p >` : `</p >`}
  `;

  document.getElementById("quote-box").innerHTML = wording;

  document.body.style.backgroundColor = `#${getRandomColor()}`;
}


/* runs printQuote function every 5 seconds */
setInterval(printQuote, 5000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
