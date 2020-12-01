function revers(numbers) {

    if (!Array.isArray(numbers) || numbers == null) {

        return 'It is not array';
    } else {
        let temp;

        for (let i = 0; i < numbers.length; i++) {
            for (let j = 0; j < numbers.length / 2; j++) {
                if (typeof numbers[i] !== 'number') {

                    return 'There is something wrong';
                } else {

                    temp = numbers[j];
                    numbers[j] = numbers[numbers.length - 1 - j];
                    numbers[numbers.length - 1 - j] = temp;
                }
            }
        }

        return numbers;
    }
}
console.log(revers([1, -5, 9, 3, 4, -2, 21, -34]))
