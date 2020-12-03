function getRandom(min, max) {  
    return Math.floor(Math.random() * (max - min)) + min; 
}

let arr = [];
for(let i = 0; i < 6; i++) {
    let num = getRandom(-10, 10)
    arr[i] = num;
}
console.log(arr);

let temp = 0;
for(let i = 0; i < arr.length / 2; i++) {

    temp = arr.shift();
    arr.push(temp);
}

console.log(`готовый массив: [${arr}]`)