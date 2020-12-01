function sortingBubble(numbers) {
    if (!Array.isArray(numbers) || numbers == null) {

        return 'It is not array';
    } else {

        for (let i = 0; i < numbers.length; i++) {

            if (typeof numbers[i] !== 'number') {

                return 'There is something wrong';
            } else {
                let temp;

                for (let j = i + 1; j < numbers.length; j++) {
                    if (numbers[i] > numbers[j]) {
                        temp = numbers[i];
                        numbers[i] = numbers[j];
                        numbers[j] = temp;
                    }
                }
            }
        }

        return numbers;
    }
}