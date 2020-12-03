function getRandom(min, max) {  
    return Math.floor(Math.random() * (max - min)) + min; 
}

let arr = [];
for(let i = 0; i < 6; i++) {
    let num = getRandom(-10, 10)
    arr[i] = num;
}
console.log(arr);

let index = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {

        index++;                
    }
}

console.log(`количество нечетных элементов массива: ${index}`)