function perfectNumbers(){
  var number=1;
  for (var number=1; number<=1000; number++)
  {
      var total = 0;
      for (var i = 1 ; i < number ; i++) {
        if(number %i == 0)  
          total += i;
      }
  
      if (total == number) 
        console.log(number + " is a percet number");
  	
  }
}

perfectNumbers()