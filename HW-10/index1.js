// 'use strict'
//
// function Hamburger(hamburger_size) {
//     this.topping_name = []
//     this.price = hamburger_size.price
//     this.calories = hamburger_size.calories
// }
//
// Hamburger.prototype.addTopping = function (topping) {
//     this.topping_name.push(topping.name)
//     this.price += topping.price
//     this.calories += topping.calories
// }
//
// Hamburger.prototype.getTopping = function () {
//     return this.topping_name
// }
//
// Hamburger.prototype.getCalories = function () {
//     return this.calories
// }
//
// Hamburger.prototype.getPrice = function () {
//     return this.price
// }
//
// Hamburger.SIZE_SMALL = {
//     name: 'small hamburger',
//     price: 50,
//     calories: 20,
// }
//
// Hamburger.SIZE_MEDIUM = {
//     name: 'medium hamburger',
//     price: 75,
//     calories: 30,
// }
//
// Hamburger.SIZE_BIG = {
//     name: 'big hamburger',
//     price: 100,
//     calories: 40,
// }
//
// Hamburger.WITH_CHEESE = {
//     name: 'with cheese',
//     price: 10,
//     calories: 20,
// }
//
// Hamburger.WITH_SALAD = {
//     name: 'with salad',
//     price: 20,
//     calories: 5,
// }
//
// Hamburger.WITH_POTATO = {
//     name: 'with potato',
//     price: 15,
//     calories: 10,
// }
//
// Hamburger.WITH_SEASONINGS = {
//     name: 'with seasonings',
//     price: 15,
//     calories: 0,
// }
//
// Hamburger.WITH_MAYO = {
//     name: 'with mayo',
//     price: 20,
//     calories: 5,
// }
//
// const hamburger = new Hamburger(Hamburger.SIZE_SMALL);
//
// hamburger.addTopping(Hamburger.WITH_MAYO);
// hamburger.addTopping(Hamburger.WITH_SALAD);
// hamburger.addTopping(Hamburger.WITH_POTATO);
//
//
// console.log('Topping: ' + hamburger.getTopping());
// console.log('Price with sauce: ' + hamburger.getPrice());
// console.log('Calories with sauce: ' + hamburger.getCalories());