const inputRef = document.querySelector("#validation-input");

const onCheckInput = ({ target }) => {
  if (target.value.length < target.dataset.length) {
    target.classList.remove("valid");
    target.classList.add("invalid");
  } else {
    target.classList.remove("invalid");
    target.classList.add("valid");
  }
  console.log(target);
};

inputRef.addEventListener("blur", onCheckInput);
