'use strict'

const calculator = new CreateCalculator(100);

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


function CreateCalculator(base) {
    this.result = base
    this.add = function (n) {
        if (isNumber(n)) {
            this.result += n
        }
    }
    this.sub = function (n) {
        if (isNumber(n)) {
            this.result -= n
        }
    }
    this.set = function (n) {
        if (isNumber(n)) {
            this.result = n
        }
    }
    this.reset = function () {
        this.result = base
    }
    this.get = function () {
        return this.result
    }
}


function isNumber (n) {
    return typeof n === 'number'
}