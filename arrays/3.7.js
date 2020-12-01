function countUnevenElem(numbers) {

    if (!Array.isArray(numbers) || numbers == null) {

        return 'It is not array';
    } else {
        let index = 0;

        for (let i = 0; i < numbers.length; i++) {

            if (typeof numbers[i] != 'number') {

                return 'There is something wrong';
            } else if (numbers[i] % 2 != 0) {

                index++;                
            }
        }

        return index;
    }
}