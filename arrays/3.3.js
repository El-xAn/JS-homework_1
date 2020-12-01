function indexOfArraysMin(numbers) {

    if (!Array.isArray(numbers) || numbers == null) {
        return 'It is not array';
    } else {
        let index = 0;

        for (let i = 0; i < numbers.length; i++) {
            for (let j = 1; j < numbers.length; j++) {

                if (typeof numbers[i] !== 'number') {
                    return 'There is something wrong';
                } else if (numbers[0] > numbers[j]) {
                    numbers[0] = numbers[j];
                    index = j;
                }
            }
        }

        return index;
    }
}