// SEQUENTIAL REQUESTS
// async function getPokemon() {
//   const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
//   console.log(poke1.data);
//   const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
//   console.log(poke2.data);
//   const poke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3");
//   console.log(poke3.data);
// }

// PARALLEL REQUESTS
// async function getPokemon() {
//   const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
//   const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
//   const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
//   const poke1 = await prom1;
//   const poke2 = await prom2;
//   const poke3 = await prom3;
//   console.log(poke1.data);
//   console.log(poke2.data);
//   console.log(poke3.data);
// }

function changeBodyColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
}

async function lightShow() {
  const promise1 = changeBodyColor("red", 1000);
  const promise2 = changeBodyColor("orange", 1000);
  const promise3 = changeBodyColor("yellow", 1000);
  const promise4 = changeBodyColor("green", 1000);
  const promise5 = changeBodyColor("blue", 1000);
  const promise6 = changeBodyColor("indigo", 1000);
  const promise7 = changeBodyColor("violet", 1000);
  await promise1;
  await promise2;
  await promise3;
  await promise4;
  await promise5;
  await promise6;
  await promise7;
}

// async function lightShow() {
//   await changeBodyColor("red", 1000);
//   await changeBodyColor("orange", 1000);
//   await changeBodyColor("yellow", 1000);
//   await changeBodyColor("green", 1000);
//   await changeBodyColor("blue", 1000);
//   await changeBodyColor("indigo", 1000);
//   await changeBodyColor("violet", 1000);
// }

lightShow();
