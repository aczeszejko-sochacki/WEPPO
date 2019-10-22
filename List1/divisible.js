function isDivisible(number) {
    let sum = 0;
    let isGood = true;
    let numberCopy = number;

    while (numberCopy > 0) {
        let digit = numberCopy % 10;

        if (number % digit !== 0) {
            isGood = false;
            break;
        }

        sum += digit;
        numberCopy = Math.floor(numberCopy / 10);
    }

    return isGood && (number % sum === 0)
}

const divisible = [...Array(999998).keys()].map(i => i+1).filter(number => isDivisible(number))

console.log(divisible)