function switchOperator() {
    var a = +prompt('Введите число от 0 до 15: ');
    switch(a){
        case 0:
            alert(a++);
        case 1:
            alert(a++);
        case 2:
            alert(a++);
        case 3:
            alert(a++);
        case 4:
            alert(a++);
        case 5:
            alert(a++);
        case 6:
            alert(a++);
        case 7:
            alert(a++);
        case 8:
            alert(a++);
        case 9:
            alert(a++);
        case 10:
            alert(a++);
        case 11:
            alert(a++);
        case 12:
            alert(a++);
        case 13:
            alert(a++);
        case 14:
            alert(a++);
        case 15:
            alert(a++);
            break;
        default:
            alert('Необходимо ввести число от 0 до 15');
            break;
    }
}

switchOperator();