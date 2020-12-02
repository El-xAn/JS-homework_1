function getRandom(min, max) {  
    return Math.floor(Math.random() * (max - min)) + min; 
  }

let a = getRandom(-10, 10)
let b = getRandom(-10, 10)
let c = getRandom(-10, 10)

function calcMax(a, b, c) {

    if ((a * b * c) > (a + b + c)) {

        return a * b * c + 3;
    } else if ((a * b * c) < (a + b + c)) {

         return a + b + c + 3;
    } else {

        return 'Expressions are equal.';
    }
}

console.log(calcMax(a, b, c))