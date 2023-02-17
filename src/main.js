import { formatData } from './pokemon-service';
import { createList } from './create-list';

let filterTerm = '';
const listElement = document.querySelector('.poke-list');
const inputElement = document.getElementById('pokeFilter');
const pokeballElement = document.querySelector('.pokeball-back');

inputElement.addEventListener('keyup', () => {
  filterTerm = inputElement.value;
  setList();
});

window.addEventListener('scroll', () => {
  const rotation = `translateY(-50%) rotate(${window.scrollY / 30}deg)`;
  pokeballElement.style.transform = rotation;
});

function setList() {
  formatData(pokemonList => {
    const listFiltered = filterList(pokemonList);
    const template = createList(listFiltered);
    listElement.innerHTML = template;
  });
}

function filterList(pokemonList) {
  return pokemonList.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(filterTerm.toLowerCase());
  });
}

setList();
