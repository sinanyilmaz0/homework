let total1 = 0
let total2 = 0

function isFriendl(s1,s2) {
    for (let i = 0; i < s1; i++) {
        if(s1 % i == 0) 
            total1 += i 
    }
    for (let i = 0; i < s2; i++) {
        if(s2 % i == 0)
            total2 += i 
    }

  if(total1 == s2 && total2 == s1) {
    console.log("numbers are friends")
  }
  else{
      console.log("numbers are not friends")
  }
}

isFriendl(2620, 2924);
