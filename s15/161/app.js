const signup = document.querySelector('#signup');
const creditCardNumber = document.querySelector('#cc');
const terms = document.querySelector('#terms');
const ingredients = document.querySelector('#ingredients');
const formData = {};

for (let input of [creditCardNumber, terms, ingredients]) {
  input.addEventListener('input', ({ target }) => {
    const { name, type, value, checked } = target;
    formData[name] = type === 'checkbox' ? checked : value;
  });
}

// signup.addEventListener('submit', function (event) {
//   event.preventDefault();
//   console.dir(creditCardNumber.value);
//   console.dir(terms.checked);
//   console.dir(ingredients.value);
// });

// creditCardNumber.addEventListener('input', function (e) {
//   formData['cc'] = e.target.value;
// });

// ingredients.addEventListener('input', function (e) {
//   formData['ingredients'] = e.target.value;
// });

// terms.addEventListener('input', function (e) {
//   formData['terms'] = e.target.checked;
// });
