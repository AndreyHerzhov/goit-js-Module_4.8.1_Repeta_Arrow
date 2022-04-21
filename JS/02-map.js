/*
 * Array.prototype.map()
 * - Поэлементов перебирает оригинальный массив
 * - Не изменяет оригинальный массив
 * - Возвращает новый массив той же длины  
*/

// const numbers = [10,15,20,25,30]

// const doubleNums = numbers.map( number => {
//     console.log(number)

//     return number * 2;
// })

// console.log(`doubleNums:`, doubleNums) // [20, 30, 40, 50, 60]


// const players = [
//     {id: `player-1` , name: `Mango` , timePlayed: 310 , points: 54,  online: false},
//     {id: `player-2` , name: `Poly` , timePlayed: 470 , points:  92,  online: true},
//     {id: `player-3` , name: `Kiwi` , timePlayed: 230 , points: 48,  online:  true},
//     {id: `player-4` , name: `Ajax` , timePlayed:  150, points: 71,  online:  false},
//     {id: `player-5` , name: `Chelsee` , timePlayed: 80 , points: 48,  online:  true},
// ];

// console.table(players)

/*
 * Получаем миссив имён всех игроков
 */

// const playerNames = players.map(player => {
//     // console.log(player);

//     return player.name; // явный вовзрат
// });

// console.log(`playerNames:`, playerNames)


// const playerNames = players.map(player => player.name); // не явный вовзрат
// console.log(`playerNames:`, playerNames) // ['Mango', 'Poly', 'Kiwi', 'Ajax', 'Chelsee']



// const playerIds = players.map(player => player.id)
// console.log(playerIds) // ['player-1', 'player-2', 'player-3', 'player-4', 'player-5']



/*
 * Увеличиваем количество поинтов каждого игрока на 10%
 */

// const updatedPlayers = players.map( player => ({
//     ...player,
//     points: player.points * 1.1,
// })); 

// console.table(updatedPlayers)


/*
 * Увеличиваем кол-во часов игрока по id
 */

// const playerIdToupdate = `player-3`

// const updatedPlayers = players.map(player => {
//     console.log(player.id)
//     if(playerIdToupdate === player.id){
//         console.log(`We have found ID`)

//         return {
//             ...player,
//             timePlayed: player.timePlayed + 100,
//         }
//     }
//     return player;
// })

// console.table(updatedPlayers)


/*
 * Увеличиваем кол-во часов игрока по id тернарник + рефакторинг без return
 */

// const updatedPlayers = players.map(player => 
//      playerIdToupdate === player.id 
//     ? {...player, timePlayed: player.timePlayed + 100,}
//     : player,
//     );
       

// console.table(updatedPlayers)