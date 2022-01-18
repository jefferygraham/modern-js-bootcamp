function grumpus() {
  alert('Called!');
}

// setTimeout(function () {
//   alert('CALLED!');
// }, 5000);

const btn = document.querySelector('button');
btn.addEventListener('click', function () {
  alert('CLICKED!!!');
});
