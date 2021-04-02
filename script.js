function numbertoobject(n) {
    var number = {
        hundreds: '',
        tens: '',
        units: '',
        get myObject() {
            return "hundreds: " + this.hundreds + " tens: " + this.tens + " units: " + this.units;
        }
    };
    if (n.length > 3) {
        alert("Число превышает 999!");
        return number.myObject;
    }
    else {
        let leftPad = (s, c, n) => c.repeat(n - s.length) + s;
        n = leftPad(n, "0", 3);
        number.hundreds = n.substr(0, 1);
        number.tens = n.substr(1, 1);
        number.units = n.substr(2, 2);
        return number.myObject;
    }
}
function task1() {
    var n = document.getElementById('inp').value;
    alert(numbertoobject(n));
}

var basket = {
    goods: [],
    put: function (good) {
        this.goods.push(good);
        alert("Товар добавлен!")
    },
    get_basket_price: function () {
        var val = 0;
        for (i = 0; i < this.goods.length; i++) {
            val = val + this.goods[i].price * this.goods[i].amount;
        }
        return val;
    }
};

function task2() {
    let good_name = document.getElementById('inp_1').value;
    let good_price = document.getElementById('inp_2').value;
    let good_amount = document.getElementById('inp_3').value;

    basket.put({
        name: good_name,
        price: good_price,
        amount: good_amount
    });
}
function task3() {
    alert(basket.get_basket_price());
}
function task4() {

}
