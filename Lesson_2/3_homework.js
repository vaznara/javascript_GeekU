function compare(a, b) {
    if(a > 0 && b > 0) {
        var result = a - b;
    } else if(a < 0 && b < 0) {
        result = a * b;
    } else {
        result = a + b;
    }

    return result;
}

var a = +prompt('Введите число a:');
var b = +prompt('Введите число a:');

var functionResult = compare(a, b);
alert(functionResult);