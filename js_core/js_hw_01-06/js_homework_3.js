// Task 1
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ: значение используя Object.keys() и for...of

// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;

// const objkeys = Object.keys(user);

// for (const key of objkeys) {
//   console.log(`${key}: ${user[key]}`);
// }

// Task 2

// Напиши функцию countProps(obj), считающую кол-во свойств в объекте. Функция возвращает число - количество свойств.

// const countProps = function (obj) {
//   const objKeys = Object.keys(obj);
//   return objKeys.length;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */

// console.log(countProps({})); // 0

// console.log(countProps({ name: 'Mango', age: 2 })); // 2

// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// console.log(
//   countProps({
//     mail: 'poly@mail.com',
//     isOnline: true,
//     score: 500,
//     account: 'premium',
//     weapon: 'Axe',
//   }),
// ); // 5

// Task 3

// Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого
// продуктивного(который выполнил больше всех задач).Сотрудники и кол - во выполненых задач содержатся как
// свойства объекта в формате "имя": "кол-во задач".

// const findBestEmployee = function (employees) {
//   const entries = Object.entries(employees);
//   let value = 0;
//   let key;

//   for (const entry of entries) {
//     if (entry[1] > value) {
//       value = entry[1];
//       key = entry[0];
//     }
//   }
//   return key;
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux

// Task 4

// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.Функция считает общую сумму запрплаты работников
// и возращает ее.Каждое поле объекта, передаваемого в функцию, имеет вид "имя": "зарплата".

// const countTotalSalary = function (employees) {
//   const values = Object.values(employees);
//   let totalSalary = 0;

//   for (const value of values) {
//     totalSalary += value;
//   }
//   return totalSalary;
// };

// function countTotalSalary(employees) {
//   const employeesSalary = Object.keys(employees);
//   let sum = 0;
//   for (const employeeSalary of employeesSalary) {
//     sum += employees[employeeSalary];
//   }
//   return sum;
// }

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */

// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400

// Task 5

// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.Возвращает
// массив значений определенного свойства prop из каждого объекта в массиве.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//   const valuesArr = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i][prop] !== undefined) valuesArr.push(arr[i][prop]);
//   }

// for (const value of arr) {
//   if (value[prop] !== undefined) {
//     valuesArr.push(value[prop]);
//   }
// }
// return valuesArr;

//   for (let i = 0; i < arr.length; i += 1) {
//     if (prop in arr[i]) valuesArr.push(arr[i][prop]);
//   }

//   for (const value of arr) {
//     if (prop in value) {
//       valuesArr.push(value[prop]);
//     }
//   }
//   return valuesArr;
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []

// Task 6

// Напиши функцию calculateTotalPrice(allProdcuts, productName), которая получает массив объектов и имя продукта
//   (значение свойства name).Возвращает общую стоимость продукта(цена * количество).

// Вызовы функции для проверки работоспособности твоей реализации.

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProducts, productName) {
//   for (const { name, price, quantity } of allProducts) {
//     if (name === productName) return price * quantity;
//   }
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(calculateTotalPrice(products, 'Радар')); // 5200

// console.log(calculateTotalPrice(products, 'Дроид')); // 2800
