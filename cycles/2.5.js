function getRandom(min, max) {  
    return Math.floor(Math.random() * (max - min)) + min; 
  }

let num = getRandom(21, 999)

function mirrorDisplay(num) {
    let rem;
    let sum = 0;
    for (let i = 0; i < num; ) {
        rem = num % 10;
        a = num / 10 - rem / 10;
        num = a;
        sum += rem;
    }
    return sum;
}
console.log(mirrorDisplay(num))