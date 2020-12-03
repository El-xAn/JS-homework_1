function getRandom(min, max) {  
    return Math.floor(Math.random() * (max - min)) + min; 
}

let arr = [];
for(let i = 0; i < 5; i++) {
    let num = getRandom(-10, 10)
    arr[i] = num;
}
console.log(arr);

let indexMin = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {

        if (arr[0] > arr[j]) {
            arr[0] = arr[j];
            indexMin = j;
        }
    }
}

console.log(`индекс минимального элемента массива: ${indexMin}`)