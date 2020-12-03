function getRandom(min, max) {  
    return Math.floor(Math.random() * (max - min)) + min; 
}

let arr = [];
for(let i = 0; i < 5; i++) {
    let num = getRandom(-10, 10)
    arr[i] = num;
}
console.log(arr);

let min = 0;
for (let i = 1; i < arr.length; i++) {
            
    if (arr[min] > arr[i]) {
        arr[min] = arr[i];
        
    }    
}
     
console.log(`минимальный элемент массива: ${arr[min]}`);
    
