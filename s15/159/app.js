function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const player = document.querySelector('#player');
const coin = document.querySelector('#coin');

window.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowDown' || e.key === 'Down') {
    moveVertical(player, 50);
  } else if (e.key === 'ArrowUp' || e.key === 'Up') {
    moveVertical(player, -50);
  } else if (e.key === 'ArrowRight' || e.key === 'Right') {
    player.style.transform = 'scale(1,1)';
    moveHorizontal(player, 50);
  } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
    player.style.transform = 'scale(-1,1)';
    moveHorizontal(player, -50);
  }

  if (isTouching(player, coin)) moveCoin();
});

const moveVertical = (element, amount) => {
  const currentTop = extractPosition(element.style.top);
  element.style.top = `${currentTop + amount}px`;
};
const moveHorizontal = (element, amount) => {
  const currentLeft = extractPosition(element.style.left);
  element.style.left = `${currentLeft + amount}px`;
};

const extractPosition = (position) => {
  if (!position) return 100;
  return parseInt(position.slice(0, -2));
};

const moveCoin = () => {
  const height = Math.floor(Math.random() * window.innerHeight);
  const width = Math.floor(Math.random() * window.innerWidth);
  coin.style.top = `${height}px`;
  coin.style.left = `${width}px`;
};

moveCoin();
