const arr = [1, 7, 8, 0, 1, null, 4, 55, NaN, 78, 97];
let even = 0;
let odd = 0;
let zero = 0;
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
        if (arr[i] === 0) {
            zero++;
        } else if (arr[i] % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }
}
console.log('четных элементов: ' + even);
console.log('нечетных элементов: ' + odd);
console.log('нулей: ' + zero);