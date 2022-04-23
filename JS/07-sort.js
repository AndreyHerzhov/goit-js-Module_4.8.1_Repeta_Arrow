/*
 * Array.prototype.sort(callback(currentEl, nextEl){})
 * - Сортирует и ИЗМЕНЯЕТ оригинальный массив
 * - По умолчанию:
 *    - сортирует по возрастанию
 *    - приводит элементы к строке и сортирует по [Unicode](https://unicode-table.com/en/)
 */


const numbers = [1, 9, 6, 2, 3];
console.log(numbers) // [1, 9, 6, 2, 3]

// numbers.sort();
// console.log(numbers) //[1, 2, 3, 6, 9]

// const letters = ['b', 'B', 'a', 'A'];
// console.log(letters); // ['b', 'B', 'a', 'A']

// letters.sort(); 
// console.log(letters); // ['A', 'B', 'a', 'b']


/*
 * compareFunction - функция сравнения (callback)
 * Элементы массива сортируются в соответствии с её возвращаемым значением
 *  - eсли compareFunction(A, B) меньше 0, сортировка поставит A перед B
 *  - если compareFunction(A, B) больше 0, сортировка поставит B перед A
 *  - если compareFunction(A, B) вернёт 0, сортировка оставит A и B на неизменными по отношению друг к другу, но отсортирует их по отношению ко всем другим элементам.
 */


// const compareNumbers = numbers.sort((curEl, nextEl) => curEl - nextEl);
// console.log(compareNumbers) // [1, 2, 3, 6, 9]


// const compareNumbers = numbers.sort((nextEl, curEl) => curEl - nextEl);
// console.log(compareNumbers) // [9, 6, 3, 2, 1]


/*
 * Как сделать копию массива чтобы не сортировать оригинальный
 * - Array.prototype.slice()
 * - Операция spread
 */

// const copy = [...numbers] // spread
// console.log(`copy:`, copy)


const copy = [...numbers].sort() // spread
// console.log(`copy:`, copy)

const descNumbers = copy.sort((nextEl, curEl) => curEl - nextEl);
// console.log(`descNumbers:`,descNumbers) // [9, 6, 3, 2, 1]


/*
 * Кастомная сортировка сложных типов
 */

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
    { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];


// По игровому времени

const timeSorted = players.sort((firstTime, secondTime) => firstTime.timePlayed - secondTime.timePlayed)
// console.log(`timeSorted:`, timeSorted)

const byName = players.sort((curName, nextName) => {
    const result = curName.name[0] > nextName.name[0];

    if(result){
        return -1;
    }

    if(!result){
        return 1;
    }
})
console.log(byName);