var productName = [];
var productPrice = [];
var productCount = [];
var productRating = [];
var productSum = [];
var productCart = [];

for(var i = 0; i < 5; i++) { // Заполняем корзину тестовыми продуктами.

    productCart[i] = [
        productName[i] = 'Product' + i,
        productPrice[i] = 5.99,
        productCount[i] = 1,
        productSum[i] = productCount[i] * productPrice[i],
        productRating[i] = 4
    ]

}

function countBasketPrice(arr) { // Функция для подсчета суммы корзины

    var basketSum = 0;

    for(var i = 0; i < arr.length; i++){
        basketSum = basketSum + arr[i];
    }

    return basketSum;
}

console.log(countBasketPrice(productSum).toFixed(2));