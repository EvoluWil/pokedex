async function request(callback) {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=999&offset=0';
  try {
    // busca lista na api
    const response = await fetch(url);

    // transforma resposta em json
    const data = await response.json();

    // chama a função de callback
    callback(data);
  } catch (error) {
    console.log('Errou');
  }
}

const getNumberFromURL = url => {
  // url = https://pokeapi.co/api/v2/pokemon/1/
  const urlArray = url.split('/');
  // url apos split = ["https:","","pokeapi.co","api","v2","pokemon","1",""]
  return urlArray[urlArray.length - 2];
  // penúltima posição "1"
};

export const getData = callback => {
  request(({ results }) => {
    // transforma o array com map
    const pokemonList = results
      .map(pokemon => {
        // pega o numero do pokemon manipulando a url do pokemon
        const number = getNumberFromURL(pokemon.url);
        // transforma o numero do pokemon para conter 3 dígitos ex: 1 => 001
        pokemon.number = String(number).padStart(3, '0');
        // retorna o próprio pokemon, porem agora com a propriedade number
        return pokemon;
      })
      .sort((pokemonA, pokemonB) =>
        // ordena os pokemons de acordo com a propriedade number
        pokemonA.number > pokemonB.number ? 1 : -1
      );
    callback(pokemonList);
  });
};
