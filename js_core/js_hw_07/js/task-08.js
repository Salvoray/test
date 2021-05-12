const controlsContainerRef = document.querySelector('#controls');
const inputRef = controlsContainerRef.querySelector('input');
const parentDivRef = document.querySelector('#boxes');
const createBtnRef = document.querySelector("button[data-action='render']");
const deleteBtnRef = document.querySelector("button[data-action='destroy']");

const createBoxes = amount => {
  parentDivRef.innerHTML = '';
  let makeBoxesMarkup = '';
  for (let i = 1; i <= amount; i += 1) {
    const boxSize = i * 10 + 20 + 'px';
    const boxFontSize = i + 7 + 'px';
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    const makeBoxMarkup = `
    <div class = "box" style = ";
    font-size: ${boxFontSize}; width: ${boxSize};
    height: ${boxSize}; background-color: ${randomColor};">
    ${randomColor}
    </div>`;
    makeBoxesMarkup += makeBoxMarkup;
  }
  return parentDivRef.insertAdjacentHTML('afterbegin', makeBoxesMarkup);
};

// const createBoxes = amount => {
//   parentDivRef.innerHTML = '';
//   for (let i = 1; i <= amount; i += 1) {
//     const makeDivRef = document.createElement('div');
//     addBoxesStyle(makeDivRef, i);
//     parentDivRef.appendChild(makeDivRef);
//   }
// };

// const addBoxesStyle = (divRef, value) => {
//   const boxSize = value * 10 + 20 + 'px';
//   const boxFontSize = value + 7 + 'px';
//   const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
//   divRef.classList.add('box');
//   divRef.style.fontSize = boxFontSize;
//   divRef.style.width = boxSize;
//   divRef.style.height = boxSize;
//   divRef.style.backgroundColor = randomColor;
//   divRef.textContent = randomColor;
//   console.log(this);
// };

const onClickControlsBtn = ({ target }) => {
  if (target.nodeName !== 'BUTTON') {
    return;
  } else if (target === createBtnRef) {
    return createBoxes(inputRef.value);
  } else if (target === deleteBtnRef) {
    parentDivRef.innerHTML = '';
    inputRef.value = '';
  }
};

controlsContainerRef.addEventListener('click', onClickControlsBtn);
