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
calculator.reset();
console.log(calculator.get())


function createCalculator(base = 0) {
    let result = base

    return {
        add: (n) => { (typeof n === 'number') ? result += n : NaN},
        sub: (n) => { (typeof n === 'number') ? result -= n : NaN},
        set: (n) => {(typeof n === 'number') ? result = n : NaN},
        reset: () => {result = base},
        get: () => {
            return result
        },
    }
}
