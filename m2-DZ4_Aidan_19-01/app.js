//Задача 1
let months = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];
let date = new Date();
let month = date.getMonth();
alert(months[month])

//Задача 2
function buttonCl() {
    var input_1 = document.getElementById('input_1')
    var input_2 = document.getElementById('input_2')
    var input_1Value = input_1.value;
    var input_2Value = input_2.value;
    input_1Value = input_2Value;
    input_2Value = input_1Value

}