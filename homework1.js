function isPrime(...numbers) {
  
  let isPrime = false;
  
  numbers.forEach((numbers) => {
    for(var i = 2 ; i<numbers ; i++){
      if(numbers % i == 0){
          isPrime = true
          break;
      }  
    }
    if(isPrime == false)
      console.log(numbers + " is prime");

    isPrime = false;
  });
}

isPrime(2, 3, 4, 5, 7, 8,11, 13, 17);