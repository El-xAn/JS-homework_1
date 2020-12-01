function calcMax(a, b, c) {

    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {

        return 'Wrong input';
    } else {

        if ((a * b * c) > (a + b + c)) {

            return a * b * c + 3;
        } else if ((a * b * c) < (a + b + c)) {

             return a + b + c + 3;
        } else {

            return 'Expressions are equal.';
        }
    }
}