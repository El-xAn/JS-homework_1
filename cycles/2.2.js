function getRandom(min, max) {  
    return Math.floor(Math.random() * (max - min)) + min; 
  }

let a = getRandom(1, 200)

function primeNum(a) {
    let answer = "";

    for (let i = 2; i < a; i++) {
        if (a % i == 0) {
            answer = `${a} is a composite number.`;
            break;
        } else {
            answer = `${a} is a prime number.`;
        }     
    }
    return answer;        
}

console.log(primeNum(a));