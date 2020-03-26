for (var i=1; i<=100 ; i++){
  // check dei numeri divisibili per 3 e per 5 = divisibili per 15
  if ( (i%15) == 0){
    console.log("FizzBuzz");
  }
  // check numeri divisibili per 3
  else   if ( (i%3) == 0){
      console.log("Fizz");
    }
    // check numeri divisibili per 5
else   if ( (i%5) == 0){
    console.log("Buzz");
  }
  // stampo i restanti numeri
  else {
    console.log(i);
  }
}
