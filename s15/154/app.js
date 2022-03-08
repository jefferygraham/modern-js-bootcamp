const btn = document.querySelector('button');

// btn.onclick = function () {
//   console.log('You clicked me!');
// };

// btn.onclick = function () {
//   console.log('Second time!');
// };

btn.addEventListener('click', () => {
  console.log('Clicked!');
});

btn.addEventListener('click', () => {
  console.log('2nd thing!!');
});

btn.addEventListener('mouseover', function () {
  btn.innerText = 'Stop Touching me!';
});

btn.addEventListener('mouseout', function () {
  btn.innerText = 'Click Me!';
});

window.addEventListener('scroll', function () {
  console.log('Stop scrolling!');
});
