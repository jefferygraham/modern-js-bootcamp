const btn = document.querySelector('button');

// setTimeout(() => {
//   btn.style.transform = `translate(100px)`;
//   setTimeout(() => {
//     btn.style.transform = `translate(200px)`;
//     setTimeout(() => {
//       btn.style.transform = `translate(300px)`;
//       setTimeout(() => {
//         btn.style.transform = `translate(400px)`;
//         setTimeout(() => {
//           btn.style.transform = `translate(500px)`;
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

const moveX = (element, amount, delay, onSuccess, onFailure) => {
  setTimeout(() => {
    const boundary = document.body.clientWidth;
    const dimensions = element.getBoundingClientRect();
    const elRight = dimensions.right;
    const currentLeft = dimensions.left;

    if (elRight + amount > boundary) {
      onFailure();
    } else {
      element.style.transform = `translateX(${currentLeft + amount}px)`;
      onSuccess();
    }
  }, delay);
};

// moveX(btn, 100, 1000, () => {
//   moveX(btn, 100, 1000, () => {
//     moveX(btn, 100, 1000, () => {
//       moveX(btn, 100, 1000, () => {
//         moveX(btn, 1000, 1000);
//       });
//     });
//   });
// });
moveX(
  btn,
  300,
  1000,
  () => {
    moveX(
      btn,
      300,
      1000,
      () => {
        moveX(
          btn,
          300,
          1000,
          () => {
            moveX(
              btn,
              300,
              1000,
              () => {
                moveX(
                  btn,
                  300,
                  1000,
                  () => {
                    console.log('wide screen?!');
                  },
                  () => {
                    alert("can't move");
                  }
                );
              },
              () => {
                alert("can't move");
              }
            );
          },
          () => {
            alert("can't move");
          }
        );
      },
      () => {
        alert("can't move");
      }
    );
  },
  () => {
    alert("Can't move");
  }
);
