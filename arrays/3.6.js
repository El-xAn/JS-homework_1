function getRandom(min, max) {  
    return Math.floor(Math.random() * (max - min)) + min; 
}

let arr = [];
for(let i = 0; i < 5; i++) {
    let num = getRandom(-10, 10)
    arr[i] = num;
}
console.log(arr);

let temp;        
for (let j = 0; j < arr.length / 2; j++) {
   
    temp = arr[j];
    arr[j] = arr[arr.length - 1 - j];
    arr[arr.length - 1 - j] = temp;                
}        

console.log(`реверс массива: [${arr}]`)
