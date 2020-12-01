function arraysMin(numbers) {

    if (!Array.isArray(numbers) || numbers == null) {
        return 'It is not array';
    } else {
        for (let i = 0; i < numbers.length; i++) {

            if (typeof numbers[i] !== 'number') {
                return 'There is something wrong';
            } else {
                if (numbers[0] > numbers[i + 1]) {
                    numbers[0] = numbers[i + 1];
                }
            }
        }

        return numbers[0];
    }
}