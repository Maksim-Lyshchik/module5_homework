let arr = [2, 4, 5, 2, 8, 6, 4];
let sameElementArr = [];
        for (let i = 0; i < arr.length - 1; i++) {
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j]){
                    sameElementArr.push(arr[i], arr[j]);
                    console.log(true);
                } else {
                  console.log(false);
                }
            }
        }
//Сравнение делается каждого элемента с оставшимися 
//В итоге получается не совсем понятный, на первый взгляд, результат
//Не совсем понятно что с чем совпало в итоге
//Поэтому ещё сделал чтобы выводились пары, которые совпадают 
console.log(sameElementArr);