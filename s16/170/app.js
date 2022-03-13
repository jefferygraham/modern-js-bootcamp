const fakeReq = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        '/users': [
          { id: 1, username: 'Bilbo' },
          { id: 2, username: 'Frodo' },
        ],
        '/users/1': {
          id: 1,
          username: 'Bilbo',
          upVotes: 360,
          city: 'Lisbon',
          topPostId: 454321,
        },
        '/users/2': {
          id: 2,
          username: 'Frodo',
          upVotes: 571,
          city: 'Maui',
        },
        '/posts/454321': {
          id: 454321,
          title: 'Post 454321 Title',
        },
        '/about': 'This is the about page',
      };
      const data = pages[url];

      if (data) {
        resolve({ status: 200, data });
      } else {
        reject({ status: 404 });
      }
    }, 1000);
  });
};

// fakeReq('/users')
//   .then((res) => {
//     const id = res.data[0].id;
//     fakeReq(`/users/${id}`).then((res) => {
//       const topPostId = res.data.topPostId;
//       fakeReq(`/posts/${topPostId}`).then((res) => {
//         console.log(res.data.title);
//       });
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

fakeReq('/users')
  .then((res) => {
    const id = res.data[0].id;
    return fakeReq(`/users/${id}`);
  })
  .then((res) => {
    const topId = res.data.topPostId;
    return fakeReq(`/posts/${topId}`);
  })
  .then((res) => {
    console.log(res.data.title);
  })
  .catch((err) => {
    console.log(err);
  });
