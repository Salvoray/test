const rangeInputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");

spanRef.style.fontSize = "16px";
rangeInputRef.value = parseInt(spanRef.style.fontSize);

const onRangeInputChange = ({ target }) => {
  spanRef.style.fontSize = target.value + "px";
};

rangeInputRef.addEventListener("input", onRangeInputChange);
