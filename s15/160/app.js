const signup = document.querySelector('#signup');
const creditCardNumber = document.querySelector('#cc');
const terms = document.querySelector('#terms');
const ingredients = document.querySelector('#ingredients');

signup.addEventListener('submit', function (event) {
  event.preventDefault();
  console.dir(creditCardNumber.value);
  console.dir(terms.checked);
  console.dir(ingredients.value);
});
