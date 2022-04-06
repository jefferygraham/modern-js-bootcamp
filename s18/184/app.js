// function getPlanets() {
//   return axios.get("https://swapi.dev/api/planets/");
// }

// getPlanets().then((res) => console.log(res.data));

async function getPlanets() {
  try {
    const res = await axios.get("https://swapi.dev/api/ddddfdf");
    console.log(res.data);
  } catch (error) {
    console.log("In catch: ", error);
  }
}
getPlanets();
// getPlanets().catch((err) => {
//   console.log("In catch:", err);
// });
