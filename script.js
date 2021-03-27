function task1() {
    alert("c = ++a - сначала к а прибавляется 1 затем присваивается к с")           // 2
    alert("d = b++ - сначала b присваивается к d затем идет прибавление 1");           // 1
    alert("c = (2 + ++a) - сначала к а прибавляется 1 затем складывается с 2");      // 5
    alert("d = (2 + b++) - сначала сначала 2 складывается с b, затем  к b прибавляется 1");      // 4
    alert("a и b одинаковые поскольку к кажому исходному значению (1) прибавлялась два раза единица");                    // 3
}
function task2() {
    var a = 2;
    var x = 1 + (a *= 2);
    alert(x);
}
function task3() {
    var a = document.getElementById('inp_1').value;
    var b = document.getElementById('inp_2').value;

    if (a > 0 && b > 0) {
        alert(a - b);
    }
    else if (a < 0 && b < 0) {
        alert(a * b);

    }
    else {
        alert(a + b);
    }
}
function task4() {
    let a = document.getElementById('inp_3').value;
    switch (a) {
        case "0":

            alert('0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
            break;
        case "1":
            alert('1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
            break;
        case "2":
            alert('2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
            break;
        case "3":
            alert('3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
            break;
        case "4":
            alert('4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
            break;
        case "5":
            alert('5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
            break;
        case "6":
            alert('6, 7, 8, 9, 10, 11, 12, 13, 14, 15');
            break;
        case "7":
            alert('7, 8, 9, 10, 11, 12, 13, 14, 15');
            break;
        case "8":
            alert('8, 9, 10, 11, 12, 13, 14, 15');
            break;
        case "9":
            alert('9, 10, 11, 12, 13, 14, 15');
            break;
        case "10":
            alert('10, 11, 12, 13, 14, 15');
            break;
        case "11":
            alert('11, 12, 13, 14, 15');
            break;
        case "12":
            alert('12, 13, 14, 15');
            break;
        case "13":
            alert('13, 14, 15');
            break;
        case "14":
            alert('14, 15');
            break;
        case "15":
            alert('15');
            break;
        default:
            alert("Нет таких значений");
    }

}
function add(a, b) {
    return (+a + +b);
}
function sub(a, b) {
    return (a - b);
}
function mult(a, b) {
    return (a * b);
}
function div(a, b) {
    return (a / b);
}
function calc(a, sign, b) {
    switch (sign) {
        case "+":
            return (add(a, b));
            break;
        case "-":
            return (sub(a, b));
            break;
        case "*":
            return (mult(a, b));
            break;
        case "/":
            return (div(a, b));
            break;
        default:
            alert("Вы ввепли неправильный знак операции");
            return 0;
    }
}

function task5() {
    var a = document.getElementById('inp_4').value;
    var b = document.getElementById('inp_6').value;
    alert(add(a, b));
    alert(sub(a, b));
    alert(mult(a, b));
    alert(div(a, b));
}
function task6() {
    var a = document.getElementById('inp_7').value;
    var sign = document.getElementById('inp_5').value;
    var b = document.getElementById('inp_8').value;
    alert(calc(a, sign, b));
}
function task7() {
    alert("Сравнения преобразуют null в число, рассматривая его как 0. Поэтому выражение null >= 0 истинно, а null > 0 ложно. С другой стороны, для нестрогого равенства == null действует особое правило: эти значения ни к чему не приводятся, он равен null и не равен ничему другому. Поэтому null == 0 ложно.");
}
function power(val, pow) {
    return (pow == 1) ? val : (val * power(val, pow - 1));
}
function task8() {
    var val = document.getElementById('inp_9').value;
    var pow = document.getElementById('inp_10').value;
    alert(power(val, pow));
}
