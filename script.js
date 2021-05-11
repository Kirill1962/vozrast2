let zvat = prompt('Введите свое имя');
let vozr = +prompt('Введите свой год рождения');
let year = +prompt('Введите нынешний год');
function sum(){
    let res = vozr - year;
    return res;
}
console.log(zvat + ', ' + 'Ваш возраст ' + sum() );
