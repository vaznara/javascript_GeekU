function power(val, pow) {
    var result = val * val;
    if(pow > 0) {
        power(result, pow - 1);
        return result;
    }
}

var value = +prompt('Введите число: ');
var pow = +prompt('Введите степень: ');

alert(power(value, pow));