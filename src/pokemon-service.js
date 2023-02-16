async function request(url, callback) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    callback(data);
  } catch (error) {
    console.log(error);
  }
}

const getNumberFromURL = url => {
  return parseInt(url.replace(/.*\/(\d+)\/$/, '$1'));
};

export const getData = callback => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=721&offset=0';
  request(url, ({ results }) => {
    const pokemonList = results
      .map(pokemon => {
        const number = getNumberFromURL(pokemon.url);
        pokemon.number = ('000' + number).slice(-3);
        return pokemon;
      })
      .sort((pokemonA, pokemonB) => {
        return pokemonA.number > pokemonB.number ? 1 : -1;
      });
    callback(pokemonList);
  });
};
