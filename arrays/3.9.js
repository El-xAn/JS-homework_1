function getRandom(min, max) {  
    return Math.floor(Math.random() * (max - min)) + min; 
}

let arr = [];
for(let i = 0; i < 6; i++) {
    let num = getRandom(-10, 10)
    arr[i] = num;
}
console.log(`массив: [${arr}]`);

//сортировка массива пузырьком

for (let i = 0; i < arr.length; i++) {
    let temp
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }        
}
console.log(`Oтсортированный массив (пузырьком (Bubble)): [${arr}]`)


//сортировка массива вставками

for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    
    while (temp < arr[j]) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = temp;
}

console.log(`Oтсортированный массив (вставками (Insert)): [${arr}]`)
