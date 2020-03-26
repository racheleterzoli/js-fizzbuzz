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
      var h1 = document.createElement('h1');
      h1.appendChild(document.createTextNode ("Fizz"));
      document.body.appendChild(h1);
    }
    // check numeri divisibili per 5
else  if ( (i%5) == 0){
    console.log("Buzz");
    var h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode ("Fizz"));
    document.body.appendChild(h1);
  }
  // stampo i restanti numeri
  else {
    console.log(i);
    var h1 = document.createElement('h1');
    h1.appendChild(document.createTextNode(i));
    document.body.appendChild(h1);
  }
}
