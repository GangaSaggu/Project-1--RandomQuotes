/******************************************
******************************************/

/*** 
 * `quotes` array 
***/
const quotes = [];

 let quoteq = {quote: 'Almost all absurdity of conduct arises from the imitation of those whom we cannot resemble.' , source:'Samuel Johnson' , citation: 'The Five People You Meet In Heaven (Book)', year: 1709 };
 let quotew = {quote: "It is forbidden to kill; therefore all murderers are punished unless they kill in large numbers and to the sound of trumpets.", source: "Voltaire", citation: 'Home Sweet Home (Song)' , year: 1694 }
 let quotee = {quote:'Everybody likes a kidder, but nobody lends him money. ' , source:'Arthur Miller', year: 1915  };
 let quoter = {quote: 'Better fare hard with good men than feast it with bad.' , source: 'Thomas Paine', citation:'Harry Potter and the Deathly Hallows (Book)' , year: 1737 };
 let quotet =  {quote: "If a cluttered desk is the sign of a cluttered mind, what is the significance of a clean desk?", source: "Laurence J. Peter ", year: 1919 };
 
 // the five objects created above are pushed into the empty array one by one using .push()
 quotes.push(quoteq);
 quotes.push(quotew);
 quotes.push(quotee);
 quotes.push(quoter);
 quotes.push(quotet);
 console.log(quotes);

/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  
  //This randomQuote variable gets the random object from the array 
  const randomQuote = Math.floor(Math.random() * quotes.length) + 1;
  
  let ranquote = quotes[randomQuote]; //The properties of objects in the array are stored in ranquote variable
  return ranquote;
}

/***
 * `printQuote` function
***/
function printQuote(){
  let RandomQuote = getRandomQuote();
  
  //variable PtoHTML1 initiates HTML string with first two <p></p> elements.
  let PtoHTML1 = "<p class='quote'>" +RandomQuote.quote + "<p class='source'>" + RandomQuote.source;
  
  if(quotes.citation = true){
   PtoHTML1 += "<span class ='citation' >" + RandomQuote.citation+"</span>";
  }
  if(quotes.year = true){
    PtoHTML1 += "<span class ='year' >" + RandomQuote.year +"</span>";
  }

  document.getElementById('quote-box').innerHTML = PtoHTML1;
}


/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);