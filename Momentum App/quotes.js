var quotes = ["Love For All, Hatred For None. – Khalifatul Masih III",
"Change the world by being yourself. – Amy Poehler",
"Every moment is a fresh beginning. – T.S Eliot", 
"Never regret anything that made you smile. – Mark Twain", 
"What we think, we become. – Buddha"];

function newQuote(){

  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quote').innerHTML = quotes[randomNumber];
}
newQuote();

quoteinput.addEventListener('keyup', function(e){
  if (e.key === "Enter"){
    quotes.push(quoteinput.value);
    quoteinput.style.display = "none";
  }
}
)
newQuote();