//Tf = (9 / 5) * Tc + 32
function toFarenheit() {
    alert((9 / 5) * document.getElementById('inp_1').value + 32);
}
function workWithVar() {
    var admin;
    var name = 'Василий';
    admin = name;
    alert(admin)
}
function jsexp() {
    alert("JS-выражение 1000 + \"108\" будет равно 1000108")
}
function asynanddefer() {
    alert("async - может загрузиться и выполниться до того, как страница полностью загрузится.\
    \ndefer - выполняется после того, как документ загружен и обработан(ждёт)");
}