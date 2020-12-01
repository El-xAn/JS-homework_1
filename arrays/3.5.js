function sumOfUnevenElem(numbers) {

    if (!Array.isArray(numbers) || numbers == null) {
        return 'It is not array';
    } else {
        let temp = 0;

        for (let i = 0; i < numbers.length; i+=2) {

            if (typeof numbers[i] != 'number') {

                return 'There is something wrong';
            } else {

                temp += numbers[i];
            }
        }

        return temp;
    }
}