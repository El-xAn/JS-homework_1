// Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число.
let units = ['zero','one','two','three','four','five','six','seven','eight','nine'];
let ten = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
let tenners = ['twenty','thirty','fourty','fifty','sixty','seventy','eighty','ninety'];
    
    let browinput = prompt('Enter number till 999 in english: ');
    let input = browinput.toString();
    let answer = 0;

    for(let i = 0; i < 10; i++) {

        if (input == units[i]) {
            answer = i;
        } else if (input == ten[i]) {
            answer = i + 10;
        } else if (input == tenners[i]) {
            answer = (i + 2) * 10;
        } 

        for(let j = 0; j < 8; j++) {

            if (input == tenners[j] + ' ' + units[i]) {
                answer = (j+2) * 10 + i;
            }

            for (let l = 0; l < 10; l++) {
           
                if(input == units[l] + ' ' + 'hundred' + ' ' + tenners[j] + ' ' + units[i]) {
                    answer = l * 100 +(j+2) * 10 + i;
                } else if (input == units[l] + ' ' + 'hundred') {
                    answer = l*100;
                } else if(input == units[l] + ' ' + 'hundred' + ' ' + units[i]) {
                    answer = l * 100 + i;
                } else if (input == units[l] + ' ' + 'hundred' + ' ' + tenners[j]) {
                    answer = l * 100 + (j + 2)*10
                }                
                
            }
        } 
    }
    
    
    
alert(answer);