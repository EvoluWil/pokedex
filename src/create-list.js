export const createList = pokemonList => {
  // retorna a lista de pokemons em html ja formatado
  return (
    pokemonList
      .map(pokemon => {
        //para cada pokemon retorna uma "li" com a imagem, numero e nome do pokemon
        return `<li class="poke-list-item">
                  <img src="https://serebii.net/pokemon/art/${pokemon.number}.png" width='60px'/>
                  <span> ${pokemon.number} - ${pokemon.name}</span>
                </li>`;
      })
      // transforma o array em string separando cada item por uma string vazia
      .join('')
  );
};
