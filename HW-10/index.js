'use strict'

function Hamburger(hamburger_size) {
    this.price = hamburger_size.price
    this.calories = hamburger_size.calories
}

Hamburger.prototype.addTopping = function (topping) {
    this.price += topping.price
    this.calories += topping.calories
}

Hamburger.prototype.getCalories = function () {
    return this.calories
}

Hamburger.prototype.getPrice = function () {
    return this.price
}

Hamburger.SIZE_SMALL = {
    price: 50,
    calories: 20,
}

Hamburger.SIZE_MEDIUM = {
    price: 75,
    calories: 30,
}

Hamburger.SIZE_BIG = {
    price: 100,
    calories: 40,
}

Hamburger.WITH_CHEESE = {
    price: 10,
    calories: 20,
}

Hamburger.WITH_SALAD = {
    price: 20,
    calories: 5,
}

Hamburger.WITH_POTATO = {
    price: 15,
    calories: 10,
}

Hamburger.WITH_SEASONINGS = {
    price: 15,
    calories: 0,
}

Hamburger.WITH_MAYO = {
    price: 20,
    calories: 5,
}

const hamburger = new Hamburger(Hamburger.SIZE_SMALL);

hamburger.addTopping(Hamburger.WITH_MAYO);
hamburger.addTopping(Hamburger.WITH_SALAD);
hamburger.addTopping(Hamburger.WITH_POTATO);

console.log('Price with sauce: ' + hamburger.getPrice());
console.log('Calories with sauce: ' + hamburger.getCalories());