// SEQUENTIAL REQUESTS
async function getPokemonSequential() {
  const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
  console.log(poke1.data);
  const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
  console.log(poke2.data);
  const poke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3");
  console.log(poke3.data);
}

// PARALLEL REQUESTS
async function getPokemon() {
  const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");
  const results = await Promise.all([prom1, prom2, prom3]);
  console.log(results);
  printPokemon(results);
}

getPokemon();
function printPokemon(arr) {
  for (let pokemon of arr) {
    console.log(pokemon.data.name);
  }
}
