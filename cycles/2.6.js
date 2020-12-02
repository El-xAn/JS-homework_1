function getRandom(min, max) {  
    return Math.floor(Math.random() * (max - min)) + min; 
  }

let num = getRandom(101, 9999)

function addNums(num) {
    let remainder ;
    let result = "";

    while (num > 0) {

        rem = num % 10;
        num = (num - rem) / 10;        
        result += rem.toString();
    }
    
    return result.toString();
}

console.log(addNums(num));