// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//   после чего вставит все li за одну операцию в список ul.ingredients.
// Для создания DOM - узлов используй document.createElement().

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsRef = document.getElementById("ingredients");

// for (let i = 0; i < ingredients.length; i += 1) {
//   const liEl = document.createElement("li");
//   console.log(liEl);
//   ingredientsEL.append((liEl.textContent = ingredients[i]));
// }

const makeList = (arr) => {
  return arr.map((item) => {
    const itemREf = document.createElement("li");
    itemREf.style.color = "blue";
    itemREf.textContent = item;
    // ingredientsEL.append(liEl);
    return itemREf;
  });
};

// makeList();
const elements = makeList(ingredients);
ingredientsRef.append(...elements);
