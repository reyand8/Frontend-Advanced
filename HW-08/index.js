'use strict'

const calculator = createCalculator(100);

calculator.add(10);
calculator.add(10);
calculator.sub(20);

calculator.set(20);
console.log(calculator.get())
calculator.add(10);
calculator.add(10);
calculator.add('qwe');
console.log(calculator.get())

console.log(calculator.get())
calculator.reset();
console.log(calculator.get())


function createCalculator(base) {
    let result = base
    return {
        add: (n) => {
            if (isNumber(n)) {
                result += n
            }
        },
        sub: (n) => {
            if (isNumber(n)) {
                result -= n
            }
        },
        set: (n) => {
            if (isNumber(n)) {
                result = n
            }
        },
        reset: () => {result = base},
        get: () => {
            return result
        },
    }
}


function isNumber (num) {
    return typeof num === 'number'
}