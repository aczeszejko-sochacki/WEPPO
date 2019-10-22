function isPrime(number) {
    return [...Array(Math.ceil(Math.sqrt(number))).keys()].map(i => i + 2).every(n => number % n != 0)
}

const primes = [...Array(999).keys()].map(i => i+2).filter(number => isPrime(number))

console.log(primes)