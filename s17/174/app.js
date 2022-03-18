const firstReq = new XMLHttpRequest();
firstReq.addEventListener("load", function () {
  console.log("It worked!");
  const data = JSON.parse(this.responseText);
  const planets = data.results;
  for (let planet of planets) {
    console.log(planet.name);
  }
});
firstReq.addEventListener("error", () => {
  console.log("It did not work!");
});

firstReq.open("GET", "https://swapi.dev/api/planets/");
firstReq.send();
console.log("Request Sent!");
