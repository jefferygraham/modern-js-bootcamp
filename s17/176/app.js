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

const swapiPromise = fetch("https://swapi.dev/api/planetsuy21/")
  .then((res) => {
    if (res.ok) {
      res.json().then((data) => {
        const planets = data.results;
        for (let planet of planets) {
          console.log(planet.name);
        }
      });
    } else {
      throw new Error(`Status code error: ${res.status}`);
    }
  })
  .catch((err) => {
    console.log("Something went wrong with fetch.");
    console.log(err);
  });
