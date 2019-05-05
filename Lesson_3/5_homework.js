function piramide(count) {
    var str = '';
    for (var i = 0; i < count; i++) {
        str = str + '*';
        console.log(str);
    }

}

var rowCount = +prompt('Введите кол-во рядов: ');
piramide(rowCount);