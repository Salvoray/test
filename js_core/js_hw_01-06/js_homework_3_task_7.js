// Task 7

// Напиши скрипт управления личным кабинетом интернет банка.Есть объект account в котором необходимо реализовать
// методы для работы с балансом и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const IdGen = function () {
  // return '_' + Math.random().toString(36).substr(2, 9);
  return Math.floor(Math.random() * 5) + 1;
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */

  createTransaction(amount, type) {
    const transaction = {
      id: this.transactions.length,
      amount,
      type,
    };
    return transaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */

  deposit(amount) {
    const createDeposit = this.createTransaction(amount, Transaction.DEPOSIT);
    this.balance += amount;
    this.transactions.push(createDeposit);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */

  withdraw(amount) {
    const createWithdraw = this.createTransaction(amount, Transaction.WITHDRAW);
    if (amount > this.balance) {
      alert(`Снятие ${Number(amount)}  недоступно. Недостаточно средств!`);
    } else {
      this.balance -= amount;
      this.transactions.push(createWithdraw);
    }
  },

  /*
   * Метод возвращает текущий баланс
   */

  getBalance() {
    return `Текущий баланс: ${this.balance}`;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */

  getTransactionDetails(id) {
    // for (const value of this.transactions) {
    //   if (value.id === id) return value;
    // }
    return this.transactions[id];
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */

  getTransactionTotal(type) {
    let sumTransactionType = 0;
    for (const transaction of this.transactions) {
      if (transaction.type === type) sumTransactionType += transaction.amount;
    }
    return `Сумма транзакций по типу ${type}: ${sumTransactionType}`;
  },
};

account.withdraw(1);
account.deposit(1500);
account.withdraw(500);
account.deposit(2300);
account.deposit(400);
account.withdraw(200);
console.log(account.getBalance());
console.log('История транзакций:', account.transactions);
console.log('Поиск транзакции по ID:', account.getTransactionDetails(0));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
