// Вводим число (0-999), получаем строку с прописью числа.
              
let units = ['ноль','один','два','три','четыре','пять','шесть','семь','восемь','девять'];
let ten = ['десять','одинадцать','двенадцать','тринадцать','четырнадцать','пятнадцать','шестнадцать','семнадцать','восемнадцать','девятнадцать'];
let tenners = ['двадцать','тридцать','сорок','пятьдесят','щетдесят','семьдесят','восемьдесят','девяносто'];
let hundreds = ['сто','двести','триста','четыреста','пятьсот','шестьсот','семьсот','восемьсот','девятьсот']; 

function getRandom() {  
    return Math.floor(Math.random() * 1000); 
}

let number = getRandom();

let temp = number.toString();

let numToWords = "";
if (temp.length == 1) {
    numToWords = units[number];
} else if (temp.length == 2 && number < 20) {
    numToWords = ten[temp[1]];
} else if (temp.length == 2 && number >= 20) {

    if (units[1] == 0) {
        numToWords = tenners[temp[0] - 2];
    } else {
        numToWords = tenners[temp[0] - 2] + ' ' + units[temp[1]];
    }    
} else if (temp.length == 3) {

    if (temp[1] == 1) {
        numToWords = hundreds[temp[0] - 1] + ' ' + ten[temp[2]]
    }else if (temp[1] == 0 && temp[2] != 0) {
        numToWords = hundreds[temp[0] - 1] + ' ' + units[temp[2]];
    } else if (temp[2] == 0 && temp[1] != 0) {
        numToWords = hundreds[temp[0] - 1] + ' ' + tenners[temp[1] - 2];
    } else if (temp[2] == 0 && temp[1] == 0) {
        numToWords = hundreds[temp[0] - 1];
    } else {
        numToWords = hundreds[temp[0] - 1] + ' ' + tenners[temp[1] - 2] + ' ' + units[temp[2]];
    }    
}

console.log(`${number} - ${numToWords}`)