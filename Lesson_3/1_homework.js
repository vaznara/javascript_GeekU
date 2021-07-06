function fillArray(maxNum) {
    var numArr = [];
    for(var i = 2; i <= maxNum ; i++){
        numArr.push(i);
    }
    return numArr;
}

function getPrimeNumbers(numArr) {
    for(var i = 0; i < numArr.length; i++) {
        for(var j = 1; j < numArr.length; j++) {
            if(numArr[j + i] % numArr[i]  === 0) {
                delete numArr[j + i];
            }
        }
    }

    return numArr;
}

var arr = getPrimeNumbers(fillArray(100));
console.log(arr);