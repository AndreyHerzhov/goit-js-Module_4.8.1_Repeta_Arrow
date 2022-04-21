/*
 * Array.prototype.reduce()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает что угодно 🤯
 * - Заменяет всё на свете, но использовать нужно с умом
 */

// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => acc + number, 0)

// console.log(total)

// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator = 5 -> number = 10 -> return 5 + 10
// accumulator = 15 -> number = 15 -> return 15 + 15
// accumulator = 30 -> number = 20 -> return 30 + 20
// accumulator = 50 -> number = 25 -> return 50 + 25

/*
 * Считаем общую зарплату
 */

// const salary = {
//     mango: 100,
//     poly: 50, 
//     ajax: 150,
//   };

//   const totalSalary = Object.values(salary).reduce((acc,number) => acc + number)
//   console.log(totalSalary)


  /*
 * Считаем общее количество часов
 */

// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//     { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
//   ];




//   const totalTimePlayed = players.reduce(
//       (totalTime, {timePlayed}) => totalTime + timePlayed,
//       0,
// );
//   console.log(totalTimePlayed) // 1240

  

  /*
 * Считаем общую сумму товаров корзины
 */

// const cart = [
//     { label: 'Apples', price: 100, quantity: 2 },
//     { label: 'Bananas', price: 120, quantity: 3 },
//     { label: 'Lemons', price: 70, quantity: 4 },
//   ];

//   const totalPrice = cart.reduce((totalValue, cart) => totalValue + cart.price * cart.quantity,0)
//   console.log(totalPrice) // 840


  /*
 * Собираем все теги из твитов
 */
const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
  ];

  const allTags = tweets.reduce((tags,tweet) => {
      tags.push(...tweet.tags)
      
      return tags;
  },[])

  console.log(allTags)