var catalog = {
    goods: [
        { id: 1, name: "name_1", price: 100, amount: 100 },
        { id: 2, name: "name_2", price: 101, amount: 100 },
        { id: 3, name: "name_3", price: 102, amount: 100 },
        { id: 4, name: "name_4", price: 103, amount: 100 },
        { id: 5, name: "name_5", price: 104, amount: 100 },
        { id: 6, name: "name_1", price: 105, amount: 100 }
    ],

    createnewarticle: function (new_good) {
        this.goods.push(new_good);
        reload();
        alert("Товар добавлен в каталог!");
    },
    get_good_on_id: function (id, amount) {
        for (i = 0; i < this.goods.length; i++) {
            if (this.goods[i].id == id) {
                this.goods[i].amount = +this.goods[i].amount - +amount;
                return { id: this.goods[i].id, name: this.goods[i].name, price: this.goods[i].price, amount };
            }
        }
        alert("нет такого товара в каталоге");
        return 0;
    }
};

init();
reload();



function chess() {
    numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    letters = [" ", "A", "B", "C", "D", "E", "F", "G", "H"];
    document.write("<table width='400' height='400'>");
    var letter = true;
    for (var i = 0; i <= 8; i++) {
        document.write("<tr>");
        for (var j = 0; j <= 8; j++) {
            if (letter == true) {
                document.write("<td bgcolor='white'>" + letters[j] + "</td>");
                continue;
            }
            if (j == 0) {
                document.write("<td bgcolor='white'> " + numbers[i - 1] + "</td>");
                continue;
            }
            if ((i + j) % 2 != 0) {
                document.write("<td width=\"12.5%\" bgcolor='white'></td>");
            }
            else {
                document.write("<td width=\"12.5%\" bgcolor='black'></td>");
            }
        }
        letter = false;
        document.write("</tr>");
    }
    document.write("</table>");
}

function task1() {
    chess();
}

var basket = {
    goods: [],
    put: function (good_id, good_amount) {
        //    if (catalog.get_good_on_id(good_id, good_amount) == 0) { return; }

        for (i = 0; i < this.goods.length; i++) {

            if (+this.goods[i].id == +good_id) {
                alert(this.goods[i].amount);

                if (+catalog.goods[good_id].amount >= +good_amount) {

                    this.goods[i].amount = catalog.get_good_on_id(good_id, good_amount).amount;
                    //    catalog.goods[good_id].amount = +catalog.goods[good_id].amount - +good_amount;

                    alert(this.goods[i].amount);
                    reload();
                    alert("Товар добавлен в корзину!");
                    return;
                }
                else {
                    alert("Товар не может быть добавлен поскольку нет такого количества в наличие");
                    return;
                }
            }
        }
        if (catalog.goods[good_id].amount >= good_amount) {

            this.goods.push(catalog.get_good_on_id(good_id, good_amount));
            //            catalog.goods[good_id].amount = +catalog.goods[good_id].amount - +good_amount;
            reload();
            alert("Товар добавлен в корзину!");
            return;
        }
        else {
            alert("Товар не может быть добавлен поскольку нет такого количества в наличие");
            return;
        }
    },
    get_basket_price: function () {
        var val = 0;
        for (i = 0; i < this.goods.length; i++) {
            val = val + +this.goods[i].price * +this.goods[i].amount;
        }
        return val;
    },
    get_amount: function () {
        var amount = 0;
        for (i = 0; i < this.goods.length; i++) {
            amount = amount + +this.goods[i].amount;
        }
        return amount;
    }
};

function init() {
    var des = document.querySelector(".desk");

    des.innerHTML = "<label for=\"inp\">Шахматная доска:</label><button onclick=\"task1()\" class=\"but_1\">Сгенерировать доску</button>";

    var sh = document.querySelector(".shop");

    sh.innerHTML = "<p>Из каталого ниже впишите ID товара, его количество и нажмите добавить</p><br><label for=\"inp_1\">ID товара:</label><input type=\"number\" id=\"inp_1\">\
    <br><label for=\"inp_2\">Количество:</label>\
    <input type=\"number\" id=\"inp_2\">\
    <br><button onclick=\"task2()\" class=\"but_2\">Добавить товар в корзину</button>\
    <br><button onclick=\"task3()\" class=\"but_3\">Подсчитать стоимость</button>";
}

function reload() {
    var ct = document.querySelector(".catalog");
    var text = "";
    for (i = 0; i < catalog.goods.length; i++) {
        text = text + "\n<p class=\"id_" + (i + 1) + "\"> " + "id товара - " + catalog.goods[i].id + ", название товара - " + catalog.goods[i].name + ", цена товара - " + catalog.goods[i].price + ", в наличие есть в шт. - " + "<h3 class=\"but_4\">" + catalog.goods[i].amount + "</h3></p> ";

    }
    ct.innerHTML = text;
}

function task2() {
    let good_id = document.getElementById('inp_1').value;
    let good_amount = document.getElementById('inp_2').value;

    basket.put(good_id, good_amount);

    //var t = "id_" + good_id;
}

function task3() {
    if (basket.get_basket_price() != 0) {
        alert("стоимость корзины равна " + basket.get_basket_price() + " количество товаров в корзине " + basket.get_amount());
    }
    else {
        alert("корзина пуста!")
    }
}
function task4() {
}
