function coordinates(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {

        return 'Wrong input';
    } else if (x > 0 && y > 0) {

            return 'The point belongs 1st quarter.';
        } else if (x < 0 && y > 0) {

            return 'The point belongs 2nd quarter.';
        } else if (x < 0 && y < 0) {

            return 'The point belongs 3rd quarter.';
        } else if (x > 0 && y < 0) {

            return 'The point belongs 4th quarter.';
        } else if (x == 0) {

            return 'The point is on the ordinate axis.';
        } else if(y == 0) {
            return 'The point is on the absis axis.';
        }
}