function getRandom(min, max) {  
    return Math.floor(Math.random() * (max - min)) + min; 
  }

let a = getRandom(1, 10)
let b = getRandom(1, 10)

function checkNumber(a, b) {
    if (a % 2 === 0) {

        console.log(a * b);
    } else if (a % 2 !== 0) {

        console.log(a + b);
    }
}

checkNumber(a, b)