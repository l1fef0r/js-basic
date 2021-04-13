


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



function task1() {

}

var basket = {
    goods: [],
    put: function (good_id, good_amount) {
        //    if (catalog.get_good_on_id(good_id, good_amount) == 0) { return; }

        for (i = 0; i < this.goods.length; i++) {

            if (+this.goods[i].id == +good_id) {

                for (ii = 0; i < catalog.goods.length; ii++) {
                    if (catalog.goods[ii].id == this.goods[i].id) {
                        if (+catalog.goods[ii].amount >= +good_amount) {

                            this.goods[i].amount = +this.goods[i].amount + +catalog.get_good_on_id(+good_id, good_amount).amount;
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

            }
        }
        for (i = 0; i < catalog.goods.length; i++) {

            if ((+catalog.goods[i].id == +good_id) && (+catalog.goods[i].amount >= +good_amount)) {
                this.goods.push(catalog.get_good_on_id(good_id, good_amount));
                //catalog.goods[good_id].amount = +catalog.goods[good_id].amount - +good_amount;
                reload();
                alert("Товар добавлен в корзину!");
                return;
            }
        }

        alert("Товар не может быть добавлен поскольку нет такого количества в наличие");
        return;
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
            amount = +amount + +this.goods[i].amount;
        }
        return amount;
    }
};

function init() {

    var sh = document.querySelector(".shop");

    sh.innerHTML = "<p>Из каталого ниже впишите ID товара, его количество и нажмите добавить</p><br><label for=\"inp_1\">ID товара:</label><input type=\"number\" id=\"inp_1\">\
    <br><label for=\"inp_2\">Количество:</label>\
    <input type=\"number\" id=\"inp_2\">\
    <br><button id=\"add\" onclick=\"task2()\" class=\"but_2\">Добавить товар в корзину</button>";

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
    task3();
}

function task3() {
    changetext();
    if (basket.get_basket_price() != 0) {
        var par = document.getElementById("my_p");
        // par.innerHTML = basket.get_basket_price();
        //alert("стоимость корзины равна " + basket.get_basket_price() + " количество товаров в корзине " + basket.get_amount());
        par.innerHTML = "стоимость корзины равна " + basket.get_basket_price() + " количество товаров в корзине " + basket.get_amount();
    }
    else {
        alert("корзина пуста!");
    }
}

function changetext() {
    if (!document.getElementById("my_p")) {
        var p = document.createElement("p");
        p.id = "my_p";
        p.className = "amount";
        p.innerHTML = "Пусто";
        catal.appendChild(p);
    }
    else {
        var par = document.getElementById("my_p");
    }
}
function init_gallery() {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = changeBigPicture;
    }
}
function changeBigPicture(eventObj) {



    var appDiv = document.getElementById("big_picture");
    appDiv.innerHTML = "";
    var eventElement = eventObj.target;
    var imageNameParts = eventElement.id.split("_");
    var src = "img/big/" + imageNameParts[1] + ".webp";
    viewwin = window.open(src, 'viewwin', 'width=600,height=600');
    var imageDomElement = document.createElement("img");
    imageDomElement.src = src;
    appDiv.appendChild(imageDomElement);
}
init_gallery();
/*
const gallery = {
    settings: {
        previewSelector: '.mySuperGallery',
        openedImageWrapperClass: 'galleryWrapper',
        openedImageClass: 'galleryWrapper__image',
        openedImageScreenClass: 'galleryWrapper__screen',
        openedImageCloseBtnClass: 'galleryWrapper__close',
        openedImageCloseBtnSrc: 'images/gallery/close.png',
    },

    init(userSettings = {}) { // init({previewSelector: '.mySelector'})
        Object.assign(this.settings, userSettings);

        document.querySelector(this.settings.previewSelector)
            .addEventListener('click', event => {
                this.containerClickHandler(event);
            });
    },

    containerClickHandler(event) {
        if (event.target.tagName !== 'IMG') return;

        this.openImage(event.target.dataset.full_image_url);
    },

    openImage(src) {
        this.getScreenContainer()
            .querySelector(`.${this.settings.openedImageClass}`).src = src;
    },

    getScreenContainer() {
        const galleryWrapperElement = document
            .querySelector(`.${this.settings.openedImageWrapperClass}`);

        if (galleryWrapperElement) return galleryWrapperElement;

        return this.createScreenContainer();
    },

    createScreenContainer() {
        const galleryWrapperElement = document.createElement('div');
        galleryWrapperElement.classList.add(this.settings.openedImageWrapperClass);

        const galleryScreenElement = document.createElement('div');
        galleryScreenElement.classList.add(this.settings.openedImageScreenClass);
        galleryWrapperElement.appendChild(galleryScreenElement);

        const closeImageElement = new Image();
        closeImageElement.classList.add(this.settings.openedImageCloseBtnClass);
        closeImageElement.src = this.settings.openedImageCloseBtnSrc;
        closeImageElement.addEventListener('click', () => this.close()); // this.close.bind(this);
        galleryWrapperElement.appendChild(closeImageElement);

        const image = new Image();
        image.classList.add(this.settings.openedImageClass);
        galleryWrapperElement.appendChild(image);

        document.body.appendChild(galleryWrapperElement);

        return galleryWrapperElement;
    },

    close() {
        document.querySelector(`.${this.settings.openedImageWrapperClass}`).remove();
    },
};
gallery.init({ previewSelector: '.galleryPreviewsContainer' });*/