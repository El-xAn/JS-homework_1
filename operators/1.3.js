function getRandom(min, max) {  
    return Math.floor(Math.random() * (max - min)) + min; 
  }

let a = getRandom(-10, 10)
let b = getRandom(-10, 10)
let c = getRandom(-10, 10)

function sumPositive(a, b, c) {   
    if (a <= 0 ) {
         a = 0;
    }
    if (b <= 0 ) {
         b = 0;
    }
    if (c <= 0 ) {
        c = 0;
    }

    return a + b + c;
}

console.log(sumPositive(a, b, c))