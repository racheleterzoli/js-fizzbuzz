alert ("Ecco qui stampati i numeri da 1 a 100. Se il numero è divisibile per 3 staperò FIZZ, se è divisibile per 5 stamperò BUZZ, se è divisibile per entrambi stamperò FIZZBUZZ, altrimenti stamperò solo il numero, premi ok per continuare e vai con il cursore sull'immagine, altrimenti non apparià ninete. MAGIA.");

for (var i=1; i<=100 ; i++){
  // check dei numeri divisibili per 3 e per 5 = divisibili per 15
  if ( (i%15) == 0){
    console.log("FizzBuzz");
  var h1 = document.createElement('h1');
  h1.appendChild(document.createTextNode ("FizzBuzz"));
  document.body.appendChild(h1);
  }
  // check numeri divisibili per 3
  else   if ( (i%3) == 0){
      console.log("Fizz");
      var h2 = document.createElement('h2');
      h2.appendChild(document.createTextNode ("Fizz"));
      document.body.appendChild(h2);
    }
    // check numeri divisibili per 5
else  if ( (i%5) == 0){
    console.log("Buzz");
    var h3 = document.createElement('h3');
    h3.appendChild(document.createTextNode ("Buzz"));
    document.body.appendChild(h3);
  }
  // stampo i restanti numeri
  else {
    console.log(i);
    var h4 = document.createElement('h4');
    h4.appendChild(document.createTextNode(i));
    document.body.appendChild(h4);
  }
}
