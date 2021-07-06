function mathSum(a, b) {
    return a + b;
}

function mathMultuply(a, b) {
    return a * b;
}

function mathSubtract(a, b) {
    return a - b;
}

function mathDivide(a, b) {
    return a / b;
}

function mathOperations(arg1, arg2, operationString) {
    switch (operationString) {
        case '+':
            alert('Функция сложения: '+ mathSum(arg1, arg2));
            break;
        case '*':
            alert('Функция умножения: '+ mathMultuply(arg1, arg2));
            break;
        case '-':
            alert('Функция вычитания: '+ mathSubtract(arg1, arg2));
            break;
        case '/':
            alert('Функция вычитания: '+ mathDivide(arg1, arg2));
            break;
    }
}

var arg1 = +prompt('Введите первый аргумент: ');
var arg2 = +prompt('Введите второй аргумент: ');
var operationString = prompt('Введите требуемую операцию (+, -, * или /');

mathOperations(arg1, arg2, operationString);