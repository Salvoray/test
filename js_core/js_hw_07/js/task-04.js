// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

// let counterValue = 0;

// const valueRef = document.querySelector("#value");
// const IncrementBtnRef = document.querySelector(
//   'button[data-action = "increment"]'
// );
// const DecrementBtnRef = document.querySelector(
//   'button[data-action = "decrement"]'
// );

// const increment = () => {
//   counterValue += 1;
//   valueRef.textContent = counterValue;
// };

// const decrement = () => {
//   counterValue -= 1;
//   valueRef.textContent = counterValue;
// };

// IncrementBtnRef.addEventListener("click", increment);
// DecrementBtnRef.addEventListener("click", decrement);

//-------------------------------------------------------

const valueRef = document.querySelector("#value");
const IncrementBtnRef = document.querySelector(
  'button[data-action = "increment"]'
);
const DecrementBtnRef = document.querySelector(
  'button[data-action = "decrement"]'
);

class Counter {
  constructor({ initValue = 0, step = 1 }) {
    this.initValue = initValue;
    this.step = step;
  }

  increment() {
    this.initValue += this.step;
  }

  decrement() {
    this.initValue -= this.step;
  }
}

const counter = new Counter({ initValue: 100, step: 5 });
valueRef.textContent = counter.initValue;

IncrementBtnRef.addEventListener("click", () => {
  counter.increment();
  valueRef.textContent = counter.initValue;
});
DecrementBtnRef.addEventListener("click", () => {
  counter.decrement();
  valueRef.textContent = counter.initValue;
});
