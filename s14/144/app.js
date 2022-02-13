const AllLis = document.querySelectorAll('li');
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo'];

AllLis.forEach((li, idx) => {
  const color = colors[idx];
  li.style.color = color;
});
