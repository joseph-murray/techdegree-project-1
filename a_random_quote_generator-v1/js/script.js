/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat
  
  
  
  
  
  
  
  function random_bg_color() { // this function creates a random background color and will be used in the print quote function 
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = bgColor;
    }
/*** 
 * `quotes` array 
***/
let quotes = // an array of quotes and tags about the quotes
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

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {return quotes[Math.floor(Math.random() * quotes.length )]} // returns random quote in array
/***
 * `printQuote` function
***/

function printQuote() {
  var randomQuote = getRandomQuote(); // returns randomQuote function
  var html = // concatonating data into html template literals
  ` <p class = "quote"> ${randomQuote.quote} </p>
    <p class = "source"> ${randomQuote.source} 
        <span>${randomQuote.year}</span>
        <span> ${randomQuote.citation}</span>
    </p>
    <p class = "tags"> Tags: ${randomQuote.tag} </p> 
  `; // end of template literals html
  
  document.getElementById('quote-box').innerHTML = html; // inserts html code into the html file 

  random_bg_color();
}; // time in miliseconds 

setInterval(printQuote, 10000); // executes printQuote function at this interval in milliseconds 

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);