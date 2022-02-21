import { Pokedex } from 'pokeapi-js-wrapper';

const poke = new Pokedex();

let errorListener;

export const setErrorListener = function (callback) {
  errorListener = callback;
};

const notifyError = function (message) {
  errorListener && errorListener(message);
  console.log('Error: ', message);
};

export const fetchItem = async function (searchQuery) {
  return fitSchema(await fetchPokemon(searchQuery));
};

const fetchPokemon = async function (searchQuery) {
  let result;
  if (!searchQuery) {
    notifyError('No search query');
  }
  try {
    result = await poke.getPokemonByName(searchQuery);
  } catch (error) {
    notifyError('Could not fetch that item');
  }
  console.log('fetch: ', result);
  return result;
};

const fitSchema = async function (pokemon) {
  if (!pokemon) return null;
  return {
    name: pokemon.name,
    descriptions: pokemon.stats.filter(
      (desc) =>
        desc.stat.name !== 'special-attack' &&
        desc.stat.name !== 'special-defense'
    ),
    img: pokemon.sprites.front_default,
    id: pokemon.id,
  };
};
