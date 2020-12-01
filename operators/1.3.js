function sumsPositive(a, b, c) {
    if (typeof a !== 'number' || typeof b !=='number' || typeof c !== 'number') {

        return 'Wrong input';
    } else {
        if (a <= 0 ) {
             a = 0;
        }
        if (b <= 0 ) {
             b = 0;
        }
        if (c <= 0 ) {
            c = 0;
        }

        return a + b + c;
    }
}