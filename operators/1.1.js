function checkNumber(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {

        return 'Wrong input';
    } else if (a % 2 === 0) {

        return a * b;
    } else if (a % 2 !== 0) {

        return a + b;
    }
}