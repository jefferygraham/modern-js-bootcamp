const fakeReq = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        '/users': [
          { id: 1, username: 'Bilbo' },
          { id: 2, username: 'Frodo' },
        ],
        '/about': 'About pages',
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

fakeReq('/about')
  .then((res) => {
    console.log('Req success');
    console.log(res);
  })
  .catch((res) => {
    console.log('Req failed');
    console.log(res.status);
  });
