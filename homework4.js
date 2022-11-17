function primes(){
  for(var number = 2; number < 1000; number++){
    for (var i = 2; i < number; i++)
    {
      if(number % i == 0)
          break;
    }
	  if (number == i)
  		console.log(number);
    }
}

primes();