const clickerBtn = document.querySelector('#clicker');

clickerBtn.onclick = function () {
  console.log('Hi');
};

clickerBtn.ondblclick = function () {
  console.log('Hi, Hi');
};

console.dir(clickerBtn);
