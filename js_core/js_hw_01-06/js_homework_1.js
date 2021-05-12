/* Task 1*/

// const name = "Генератор защитного поля";
// let price = 1000;

// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

// price = 2000;

// console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

/* Task 2*/

// const total = 100;
// const ordered = 20;

// if (ordered > total) {
//   console.log("На складе недостаточно товаров");
// } else {
//   console.log("Заказ оформлен, с вами свяжется менеджер");
// }

/* Task 3*/

// const ADMIN_PASSWORD = "jsismyjam";
// let message;

// if (prompt() === null) {
//   message = "Отменено пользователем";
// } else if (prompt() === ADMIN_PASSWORD) {
//   message = "Добро пожаловать!";
// } else {
//   message = "Доступ запрещен, неверный пароль!";
// }

// alert(message);

/* Task 4*/

// let credits = 23580;
// let pricePerDroid = 3000;
// let messagePrompt = prompt("Какое кол-во дроидов вы хотите купить?");
// let totalPrice;

// if (messagePrompt === null) {
//   console.log("Отменено пользователем");
// } else {
//   totalPrice = messagePrompt * pricePerDroid;
// }

// if (credits < totalPrice) {
//   console.log("Недостаточно средств на счету!");
// } else if (credits >= totalPrice) {
//   credits = credits - totalPrice;
//   console.log(
//     `Вы купили ${messagePrompt} дроидов, на счету осталось ${credits} кредитов.`
//   );
// }

/* Task 5 */

// const Chn = "Китай";
// const deliveryChn = 100;

// const Chl = "Чили";
// const deliveryChl = 250;

// const Aus = "Австралия";
// const deliveryAus = 170;

// const Ind = "Индия";
// const deliveryind = 80;

// const Yam = "Ямайка";
// const deliveryYam = 120;

// const userInputCountry = prompt("В какую страну вы хотите оформить доставку?");

// switch (userInputCountry && userInputCountry.toLowerCase()) {
//   case Chn.toLowerCase():
//     console.log(`Доставка в ${Chn} будет стоить ${deliveryChn} кредитов`);
//     break;
//   case Chl.toLowerCase():
//     console.log(`Доставка в ${Chl} будет стоить ${deliveryChl} кредитов`);
//     break;
//   case Aus.toLowerCase():
//     console.log(`Доставка в ${Aus} будет стоить ${deliveryAus} кредитов`);
//     break;
//   case Ind.toLowerCase():
//     console.log(`Доставка в ${Ind} будет стоить ${deliveryind} кредитов`);
//     break;
//   case Yam.toLowerCase():
//     console.log(`Доставка в ${Yam} будет стоить ${deliveryYam} кредитов`);
//     break;

//   case null:
//     console.log("Отменено пользователем");
//     break;

//   default:
//     alert("В вашей стране доставка недоступна!");
// }

// Task 6

// let input;
// let total = 0;

// do {
//   input = prompt('Enter any number');
//   if (Number.isNaN(Number(input))) {
//     alert('No number was entered, try again');
//   } else {
//     total = total + Number(input);
//   }
// } while (input);

// alert(`The total amount of numbers is ${total}`);
