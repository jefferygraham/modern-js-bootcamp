const btn = document.querySelector('button');

// const moveX = (element, amount, delay, onSuccess, onFailure) => {
//   setTimeout(() => {
//     const boundary = document.body.clientWidth;
//     const dimensions = element.getBoundingClientRect();
//     const elRight = dimensions.right;
//     const currentLeft = dimensions.left;

//     if (elRight + amount > boundary) {
//       onFailure();
//     } else {
//       element.style.transform = `translateX(${currentLeft + amount}px)`;
//       onSuccess();
//     }
//   }, delay);
// };

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

moveX(btn, 300, 1000)
  .then(() => moveX(btn, 300, 1000))
  .then(() => moveX(btn, 300, 1000))
  .then(() => moveX(btn, 300, 1000))
  .then(() => moveX(btn, 300, 1000))
  .then(() => moveX(btn, 300, 1000))
  .catch(({ boundary, elRight, amount }) => {
    console.log(`Body is ${boundary}px wide`);
    console.log(`Element is at ${elRight}px, ${amount} is too large`);
  });

// moveX(
//   btn,
//   300,
//   1000,
//   () => {
//     moveX(
//       btn,
//       300,
//       1000,
//       () => {
//         moveX(
//           btn,
//           300,
//           1000,
//           () => {
//             moveX(
//               btn,
//               300,
//               1000,
//               () => {
//                 moveX(
//                   btn,
//                   300,
//                   1000,
//                   () => {
//                     console.log('wide screen?!');
//                   },
//                   () => {
//                     alert("can't move");
//                   }
//                 );
//               },
//               () => {
//                 alert("can't move");
//               }
//             );
//           },
//           () => {
//             alert("can't move");
//           }
//         );
//       },
//       () => {
//         alert("can't move");
//       }
//     );
//   },
//   () => {
//     alert("Can't move");
//   }
// );
