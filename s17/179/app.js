// const checkStatusAndParse = (res) => {
//   if (res.ok) {
//     return res.json();
//   } else {
//     throw new Error(`Status code error: ${res.status}`);
//   }
// };

// const printPlanets = (data) => {
//   console.log("Loading 10 more planets...");
//   const planets = data.results;
//   for (let planet of planets) {
//     console.log(planet.name);
//   }

//   return Promise.resolve(data.next);
// };

// const fetchMorePlanets = (url = "https://swapi.dev/api/planets/") => {
//   return fetch(url);
// };

// fetchMorePlanets()
//   .then(checkStatusAndParse)
//   .then(printPlanets)
//   .then(fetchMorePlanets)
//   .then(checkStatusAndParse)
//   .then(printPlanets)
//   .then(fetchMorePlanets)
//   .then(checkStatusAndParse)
//   .then(printPlanets)
//   .then(fetchMorePlanets)
//   .catch((err) => {
//     console.log("Something went wrong with fetch.");
//     console.log(err);
//   });

axios
  .get("https://swapi.dev/api/planets")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
