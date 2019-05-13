function randomNum(max, fractionDigit) { // Функция для получения случайних чисел для генерирования цен и реитинга тестовых товаров
    var result = Math.random() * max;
    result === 0 ? result = +1 : result = +result.toFixed(fractionDigit);
    return result.toFixed(fractionDigit);
}

var products = {
    productCard: [],
    productCardFill: function (productCount) { // Создаем тестовые продукты
        for (var i = 0; i < productCount; i++) {
            this.productCard.push(
                {
                    productID: i,
                    productName: 'Product name' + i,
                    productPrice: +randomNum(100, 2),
                    productRating: randomNum(5, 0),
                    isInCart: !!+randomNum(1, 0),
                }
            )
        }
        return this.productCard;
    },
    productCart: [],
    fillProductCart: function () { // Добавляем товаров в корзину
        for (var i = 0; i < this.productCard.length; i++) {
            if (this.productCard[i].isInCart) {
                this.productCart.push(
                    {
                        productID: this.productCard[i].productID,
                        productCount: +randomNum(5, 0),
                    }
                )
            }
        }
        for (var i = 0; i <this.productCart.length; i++) {
            this.productCart[i].productSum = this.productCart[i].productCount * this.productCard[i].productPrice
        }
        return this.productCart;
    },
    countBasketPrice: function () { // Рассчитываем сумму товаров в корзине
        var basketSum = 0;

        for (var i = 0; i < this.productCart.length; i++) {
            basketSum = basketSum + this.productCart[i].productSum;
        }
        return basketSum;
    }
}

console.log(products.productCardFill(5));
console.log(products.fillProductCart());
console.log(products.countBasketPrice());