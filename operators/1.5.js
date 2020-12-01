function rating(grade) {
    if (typeof grade !== 'number' || grade <= 0) {

        return 'Wrong input';
    } else {

        if(grade >= 0 && grade < 20){

            return 'F';
        } else if(grade >= 20 && grade < 40) {

            return 'E';
        } else if(grade >= 40 && grade < 60) {

            return 'D';
        } else if(grade >= 60 && grade < 75) {

            return 'C';
        } else if(grade >= 75 && grade < 90) {

            return 'B';
        } else if(grade >= 90 && grade < 100) {

            return 'A';
        }
    }
}