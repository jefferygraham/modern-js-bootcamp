// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener("load", function () {
//   console.log("First request worked!");
//   const data = JSON.parse(this.responseText);
//   const filmURL = data.results[0].films[0];

//   const filmReq = new XMLHttpRequest();
//   filmReq.addEventListener("load", function () {
//     console.log("Second request worked!");
//     const filmData = JSON.parse(this.responseText);
//     console.log(filmData.title);
//   });
//   filmReq.addEventListener("error", () => {
//     console.log("Error retrieving film data");
//   });
//   filmReq.open("GET", filmURL);
//   filmReq.send();
//   console.log("Second Request sent");
// });
// firstReq.addEventListener("error", () => {
//   console.log("It did not work!");
// });

// firstReq.open("GET", "https://swapi.dev/api/planets/");
// firstReq.send();
// console.log("First Request Sent!");

const swapiPromise = fetch("https://swapi.dev/api/planets/")
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(`Status code error: ${res.status}`);
    }
  })
  .then((data) => {
    const filmURL = data.results[0].films[0];
    return fetch(filmURL);
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(`Status code error: ${res.status}`);
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Something went wrong with fetch.");
    console.log(err);
  });
