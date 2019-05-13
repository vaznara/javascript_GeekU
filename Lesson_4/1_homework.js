function getObject(num) {

    while(num > 999) {
        var numObject = {};
        alert('Необходимо ввести число от 0 до 999!')
        return numObject;
    }

    var numStr = num.toString().split('').reverse();

        numObject = {
            hundreds: numStr[2] ? '' : +numStr[2],
            tens: isNaN(+numStr[1]) ? '' : +numStr[1],
            digits: isNaN(+numStr[0]) ? '' : +numStr[0],
        }

    return numObject;
}

console.log(getObject(+prompt('Введите число от 0 до 999: ')));
