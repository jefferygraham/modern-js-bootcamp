const input = document.querySelector('#username');

input.addEventListener('keydown', function () {
  console.log('KEY DOWN!');
});

input.addEventListener('keyup', function () {
  console.log('KEY UP!');
});

input.addEventListener('keypress', function () {
  console.log('KEY PRESS!');
});

const addItemInput = document.querySelector('#addItem');
const itemUL = document.querySelector('#items');

addItemInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    if (!this.value) return;
    const li = document.createElement('li');
    li.innerText = this.value;
    itemUL.append(li);
  }
});
