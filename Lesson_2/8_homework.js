function power(val, pow) {

    if(pow === 0) {
        return 1;
    } else {

        return val * power(val, pow - 1);
    }
}

var value = +prompt('Введите число: ');
var pow = +prompt('Введите степень: ');

alert(power(value, pow));