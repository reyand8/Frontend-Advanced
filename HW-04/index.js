const OPERATORS = {'*': mul, '+': add, '-': sub, '/': div}
const OPERATORS_LIST = Object.keys(OPERATORS)
const selected_operator = getOperator()
const count_numbers = getCountNumbers()
const selected_numbers = getNumbers()
const result = calculate(selected_operator, selected_numbers)

postResult(selected_operator, selected_numbers, result)

function getOperator(){
    let selected_operator
    do {
        selected_operator = prompt(`Enter an operator: ${OPERATORS_LIST.join(', ')}`)
    } while (!OPERATORS_LIST.includes(selected_operator))
    return selected_operator
}

function getCorrectCount(count_numbers) {
    return !isNaN(count_numbers) && 5 > count_numbers && 1 < count_numbers
}

function getCountNumbers() {
    let count_n
    do {
        count_n = prompt(`Enter the quantity`);
    } while (!getCorrectCount(count_n))
    return count_n
}

function getCorrectNumber(count_n) {
    return !isNaN(count_n)
}

function getInputNumber(n) {
    let count_n
    do {
        count_n = prompt(`Enter the number ${n}`)
    } while (!getCorrectNumber(count_n))
    return Number(count_n)
}

function getNumbers() {
    const numb = []
    for (let i = 1; i <= count_numbers; i++) {
        numb.push(getInputNumber(i))
    }
    return numb
}

function calculate(selected_operator, selected_numbers) {
    let number = selected_numbers[0]
    for (let i = 1; i < selected_numbers.length; i++) {
        number = OPERATORS[selected_operator](number, selected_numbers[i])
    }
    return number
}

function mul(first_number, second_number) {
    return first_number * second_number;
}

function add(first_number, second_number) {
    return first_number + second_number;
}

function sub(first_number, second_number) {
    return first_number - second_number;
}

function div(first_number, second_number) {
    return first_number / second_number;
}

function postResult(selected_operator, selected_numbers, result) {
    alert(`${selected_numbers.join(`${selected_operator}`)} = ${result}`);
}