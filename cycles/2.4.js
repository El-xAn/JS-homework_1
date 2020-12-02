function getRandom(min, max) {  
  return Math.floor(Math.random() * (max - min)) + min; 
}

let num = getRandom(1, 10)

function faktorial(num) {
  if (num == 0) {
    return 1;
  } else {
    let j = 1;
  
    for (let  i = 1; i <= num; i++) {
      j *= i;
    }
    return j ;
  }
}
console.log(faktorial(num))