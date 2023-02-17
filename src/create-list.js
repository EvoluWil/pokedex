export const createList = pokemonList => {
  return pokemonList
    .map(
      pokemon => `
    <li class='poke-list-item'>
      <img src="${pokemon.image}" alt="${pokemon.name}" />
      <span>${pokemon.number} - ${pokemon.name}</span>
    </li>
  `
    )
    .join('');
};
