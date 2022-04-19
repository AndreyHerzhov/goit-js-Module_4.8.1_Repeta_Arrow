/*
 * Array.prototype.forEach(callback(currentValue, index, array), thisArg)
 * - Поэлементов перебирает текущий массив
 * - Ничего не возвращает
 * - Заменяет классический for, если не нужно прерывать цикл  
*/

const numbers = [5,10,15,20,25];

numbers.forEach(function(number, index, array) {
    console.log('number:', number)
})

// console.log(numbers)