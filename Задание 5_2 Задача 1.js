let x = prompt("Введите значение");
let unarX = + x;
if (!unarX) {
console.log("Упс, кажется, вы ошиблись");
} else if (typeof unarX === NaN) {
    console.log("Упс, кажется, вы ошиблись");
} else if (unarX % 2 === 0) {
    console.log("Вы ввели четное число");
} else {
    console.log("Вы ввели нечетное число");
};