const allLIs = document.querySelectorAll('li');

// for (let i = 0; i < allLIs.length; i++) {
//   allLIs[i].innerText = 'JS DEVELOPER!';
// }

for (let li of allLIs) {
  li.innerHTML = 'We are <b>THE CHAMPIONS</b>!';
}
