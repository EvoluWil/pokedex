import { getData } from './pokemon-service';
import { createList } from './create-list';

let filterTerm = '';
const listElement = document.querySelector('.poke-list');
const inputElement = document.getElementById('pokeFilter');
const pokeballElement = document.querySelector('.pokeball-back');

inputElement.addEventListener('keyup', function () {
  filterTerm = this.value;
  setList();
});

window.addEventListener('scroll', () => {
  const rotation = 'translateY(-50%) rotateZ(' + window.scrollY / 30 + 'deg)';
  pokeballElement.style.transform = rotation;
});

function setList() {
  getData(pokemonList => {
    const list = filterList(pokemonList);
    const template = createList(list);
    listElement.innerHTML = template;
  });
}

function filterList(pokemonList) {
  return pokemonList.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(filterTerm.toLowerCase());
  });
}

setList();
