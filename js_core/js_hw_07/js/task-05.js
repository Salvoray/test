// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
//   подставляет его текущее значение в span#name - output.Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

const onInputChange = (e) => {
  inputRef.value === ""
    ? (outputRef.textContent = "Незнакомец")
    : (outputRef.textContent = e.target.value);
};

inputRef.addEventListener("input", onInputChange);
