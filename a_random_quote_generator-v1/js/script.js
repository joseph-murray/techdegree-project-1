/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

let quotes = // an array of quotes + info about them. 
[ 
  { quote: ' "No one is going to value you more than you value yourself." ',
    source: 'Naval Ravikant',
    citation: '', 
    year: '',
    tag: ' Business' 
  },
  { quote: ' "When something is important enough, you do it even if the odds are not in your favor." ',
    source: 'Elon Musk,',
    citation: 'during 60 Minutes Overtime Interview', 
    year: ' March 18th, 2012, ',
    tag: ' Business, Inspiration' 
  },
  { quote: '"Guard your time. It\'s all you have."',
    source: 'Naval Ravikant',
    citation: '',
    year: '',
    tag: ' Life advice' 
  },
  { quote: ' "Innovation is what distinguishes a leader from a follower." ',
    source: 'Steve Jobs',
    citation: '', 
    year: '',
    tag: ' Business' 
  },
  { quote: ' "Betting against entrepreneurs who are changing the world has never been a profitable endeavor." ',
    source: 'Chamath Palihapitiya',
    citation: ' during CNBC Interview', 
    year: ', April 30, 2019',
    tag: ' Business, Tech' 
  } 
];

function getRandomQuote() {return quotes[Math.floor(Math.random() * quotes.length )]} // returns random quote in array. Will use in printQuote function

function random_bg_color() { // this function creates a random background color and will be used in the print quote function 
  var r = Math.floor(Math.random() * 256); 
  var g = Math.floor(Math.random() * 256); 
  var b = Math.floor(Math.random() * 256); 
  var bgColor = `rgb(${r},${g},${b})`; // random rgb value 
document.body.style.background = bgColor; // changes 
  } // here's more info about it: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php

function printQuote() {
  var randomQuote = getRandomQuote(); // returns randomQuote 
  var html = // concatenates data into html template literals
    ` <p class = "quote"> ${randomQuote.quote} </p>
      <p class = "source"> ${randomQuote.source} 
          <span>${randomQuote.year}</span>
          <span> ${randomQuote.citation}</span>
      </p>
      <p class = "tags"> Tags: ${randomQuote.tag} </p> 
    `; // end of template literals html
  document.getElementById('quote-box').innerHTML = html; // inserts html code into the html file 
  random_bg_color(); // random background color funtion at top of js file
  };

setInterval(printQuote, 10000); // calls printQuote function every 10,000ms (10secs)

document.getElementById('load-quote').addEventListener("click", printQuote, false); // click event listener for the print quote button 