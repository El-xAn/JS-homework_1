function getRandom(min, max) {  
    return Math.floor(Math.random() * (max - min)) + min; 
  }

let num = getRandom(1, 8)

function dayOfWeek(num) {
    switch(num) {
        case 1:
            return 'Monday';
            break;
        case 2:
            return 'Tuesday';
            break;
        case 3:
            return 'Wednesday';
            break;
        case 4:
            return 'Thursday';
            break;
        case 5:
            return 'Friday';
            break;
        case 6:
            return 'Saturday';
            break;
        case 7:
            return 'Monday';
            break;
    }
}

console.log(dayOfWeek(num))