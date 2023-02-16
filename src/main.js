import { getData } from './pokemon-service';
import { createList } from './create-list';

let filterTerm = '';
const listElement = document.querySelector('.poke-list');
const inputElement = document.getElementById('pokeFilter');
const pokeballElement = document.querySelector('.pokeball-back');

// escuta o evento de digitar no input de filtro
inputElement.addEventListener('keyup', function () {
  // atribui o valor do filtro a variável "filterTerm"
  filterTerm = this.value;
  // executa a função "setList"
  setList();
});

// escuta o evento de scroll na página
window.addEventListener('scroll', () => {
  // cria uma rotação para inserir no CSS
  const rotation = 'translateY(-50%) rotateZ(' + window.scrollY / 30 + 'deg)';
  // adiciona a rotação criada na propriedade "transform" no estilo da imagem de pokebola
  pokeballElement.style.transform = rotation;
});

function setList() {
  // chama a função getData que carrega a lista de pokemon e pega essa lista em uma função de callback
  getData(pokemonList => {
    // chama a função de filtrar pokemons e armazena na variável list
    const list = filterList(pokemonList);
    // chama a função de criar a lista em HTML e armazena na variável template
    const template = createList(list);
    // insere o template dentro de listElement que é uma "ul"
    listElement.innerHTML = template;
  });
}

function filterList(pokemonList) {
  // retorna a lista filtrada de acordo com o nome e o
  // filterTerm que é o valor do input de filtro
  return pokemonList.filter(pokemon => {
    return pokemon.name.toLowerCase().includes(filterTerm.toLowerCase());
  });
}

// chama a função setList quando a pagina é carregada
setList();
