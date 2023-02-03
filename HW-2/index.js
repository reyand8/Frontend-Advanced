const operator = (prompt('Select an operator: *, +, -, /'))
const first_number = Number(prompt('Enter operand A'))
const second_number = Number(prompt('Enter operand B'))


switch (operator) {
    case '*':
        result = first_number * second_number;
        break;
    case '+':
        result = first_number + second_number ;
        break;
    case '-':
        result = first_number - second_number;
        break;
    case '/':
        result = first_number / second_number;
        break;
    default:
        alert('Please choose the correct operator');
}

alert(String(`${first_number} ${operator} ${second_number} = ${result}`));