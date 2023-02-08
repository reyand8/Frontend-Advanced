const operator = prompt('Select an operator: *, +, -, /')
const first_number = getNumber('A')
const second_number = getNumber('B')
const result = calculation(operator, first_number, second_number)
const symbols = ['*', '+', '-', '/']

postResult(operator, first_number, second_number, result);

function postResult(operator, first_number, second_number, result) {
    if  (symbols.includes(operator) && (Number.isNaN(first_number && second_number ) === false)) {
        alert(`${first_number} ${operator} ${second_number} = ${result}`);
    }
    else {
        alert('The data is not correct');
    }
}

function getNumber(numb){
    return Number(prompt(`Enter operand ${numb}`));
}

function calculation(operator, first_number, second_number) {
    switch (operator) {
        case '*':
            return mul(first_number, second_number);
        case '+':
            return add(first_number, second_number);
        case '-':
            return sub(first_number, second_number);
        case '/':
            return div(first_number, second_number);
    }
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


//===================================================
//===================================================
// TASK 2

const obj = {
    prop: '42',
    prop2: [8, 9, 10, {
        beautifulPropertyName: 88,
        'property with spaces': {
            a: {
                b: '',
                c: {
                    someProperty: [{
                        'prop name': 'I am a smart programmer',
                    }],
                },
            },
        },
    }],
    prop3: function() {
        return {
            baz: 'Hello',
            bar: {
                anotherBeautifulProp: [8, {
                    target: 'It was simple!',
                    qwe: [8, 17, 37],
                }],
            },
        };
    },
};


console.log(obj.prop2[3]['property with spaces'].a.c.someProperty[0]['prop name']); // I am a smart programmer
console.log(obj.prop3().bar.anotherBeautifulProp[1].target); // It was simple!