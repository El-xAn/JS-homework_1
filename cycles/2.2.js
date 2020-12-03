function getRandom() {  
    return Math.floor(Math.random() * 200); 
  }

let a = getRandom()

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