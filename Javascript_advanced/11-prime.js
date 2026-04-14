'use strict';

function countPrimeNumbers() {
    function checkPrimeNumber(n) {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    let count = 0;
    for (let j = 2; j <= 100; j++) {
        if (checkPrimeNumber(j)) {
            count++;
        }
    }
    return count;
}

let a = performance.now();
for (let i = 0; i < 100; i++) {
    setTimeout(function () { countPrimeNumbers(); }, 0);
}
let b = performance.now();
console.log('Execution time of calculating prime numbers 100 times was ' + (b - a) + ' milliseconds.');
