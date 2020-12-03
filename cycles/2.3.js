function getRandom(min, max) {  
    return Math.floor(Math.random() * (max - min)) + min; 
}

let num = getRandom(0, 200);

let i = 0;
while(i*i <= num) {
    i++;
}

console.log(`корень ${num} точностью до целого: ${i-1}`);

      
