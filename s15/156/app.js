const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const h1 = document.querySelector('h1');

h1.addEventListener('mouseover', function () {
  console.log(this.innerText);
});

const changeColor = function () {
  h1.style.color = this.style.backgroundColor;
};

const container = document.querySelector('#boxes');
for (let color of colors) {
  const box = document.createElement('div');
  box.style.backgroundColor = color;
  box.classList.add('box');
  container.append(box);

  box.addEventListener('click', changeColor);
}
