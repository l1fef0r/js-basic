function task1() {
    var n = 100;
    var simples = '';
    var i = 2;
    while (i <= n) {
        var isPrime = true;
        var j = 2;
        while (j < i) {
            if (i % j === 0 && i !== j) {
                isPrime = false;
            }
            j++;
        }
        if (isPrime === true) {
            simples = simples + " " + i;
        }
        i++;
    }
    alert(simples);
}
var basket = [[]];
function task2() {
    var goods = document.getElementById('inp_1').value;
    var price = document.getElementById('inp_2').value;
    item = [];
    item.push(goods);
    item.push(price);
    alert(item);
    flag = false;
    for (let i = 0; i < basket.length; i++) {
        if (item[0] == basket[i][0]) {
            basket[i].push(item[1]);
            flag = true;
            break;
        }
    }
    if (flag == false) { basket.push(item); }
    alert(basket);

}
function countBasketPrice() {
    let amount_basket = 0;
    for (let i = 1; i < basket.length; i++) {
        for (let j = 1; j < basket[i].length; j++) {
            amount_basket = +amount_basket + +basket[i][j];
        }
    }
    alert("Стоимость всей корзины равна" + amount_basket);
}
function task3() {
    countBasketPrice();
}
function task4() {
    for (let i = 0; i < 9; alert(++i)) { }
}
function task5() {
    var pir = "";
    for (var x = 0; x < 20; x++) {
        for (var y = 0; y <= x; y = y + 1) {
            pir = pir + "*";
        }
        pir = pir + "\n";
    }
    alert(pir);
}
