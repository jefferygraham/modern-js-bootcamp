// function getPlanets() {
//   return axios.get("https://swapi.dev/api/planets/");
// }

// getPlanets().then((res) => console.log(res.data));

async function getPlanets() {
  const res = await axios.get("https://swapi.dev/api/planets");
  console.log(res.data);
}

getPlanets();
