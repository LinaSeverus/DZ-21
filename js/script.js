'use strict';

//1 Реализовать рекурсивную функцию которая находит факториал переданного в нее числа
//getFactorial(3)  в данном случае должна вернуть факториал числа 3! = 3 * 2 * 1

function getFactorial(num) {

    if (num === 1 || num === 0) {
        return 1;
    } else {
        return num * getFactorial(num - 1);
    }
}
console.log(getFactorial(3));





//2  Реализовать рекурсивную функцию которая находит возводит число в степень.
// Число которое нужно возвести в степень передается как первый аргумент в функцию
// Степень передается как второй аргумент в функцию pow(num, degree)

// function pow(num, degree) {

//     if (degree !== 1) {
//         return num * pow(num, degree - 1)
//     } else {
//         return num;
//     }
// }
// console.log(pow(2, 3));

//или

// let pow = (num, degree) => (degree !== 1 ? num * pow(num, degree - 1) : num);
// console.log(pow(2, 3));





//3  напишите рекурсивную функцию для вычисления суммы заданных положительных целых чисел a и b без прямого использования оператора +.
//Необходимо инкрементировать одно число на единицу до тех пор, пока другое число не окажется равным нулю.

// function getSum(a, b) {

//     if (b > 0) {
//         return getSum(++a, --b);
//     } else {
//         return a;
//     }

// }
// console.log(getSum(2, 5));

// //или

// let getSum = (a, b) => (b > 0 ? getSum(++a, --b) : a);
// console.log(getSum(2, 5));


