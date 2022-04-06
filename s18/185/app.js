const moveX = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const boundary = document.body.clientWidth;
      const dimensions = element.getBoundingClientRect();
      const elRight = dimensions.right;
      const currentLeft = dimensions.left;

      if (elRight + amount > boundary) {
        reject({ boundary, elRight, amount });
      } else {
        element.style.transform = `translateX(${currentLeft + amount}px)`;
        resolve();
      }
    }, delay);
  });
};

// const btn = document.querySelector("button");
// moveX(btn, 300, 1000)
//   .then(() => moveX(btn, 300, 1000))
//   .then(() => moveX(btn, 300, 1000))
//   .then(() => moveX(btn, 300, 1000))
//   .then(() => moveX(btn, 300, 1000))
//   .then(() => moveX(btn, 300, 1000))
//   .catch(({ boundary, elRight, amount }) => {
//     console.log(`Body is ${boundary}px wide`);
//     console.log(`Element is at ${elRight}px, ${amount} is too large`);
//   });
const btn = document.querySelector("button");
async function animateRight(element, amount) {
  await moveX(element, amount, 1000);
  await moveX(element, amount, 1000);
  await moveX(element, amount, 1000);
  await moveX(element, amount, 1000);
  await moveX(element, amount, 1000);
  await moveX(element, amount, 1000);
  await moveX(element, amount, 1000);
  await moveX(element, amount, 1000);
  await moveX(element, amount, 1000);
}
animateRight(btn, 100).catch((err) => {
  console.log("All done!");
  animateRight(btn, -100);
});
