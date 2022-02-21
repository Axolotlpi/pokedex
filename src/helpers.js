import { Pokedex } from 'pokeapi-js-wrapper';
import adjectives from './adjectives.json';

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
  return funify(fitSchema(await fetchPokemon(searchQuery)));
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

const fitSchema = function (pokemon) {
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

const statBreakpoints = [0, 25, 45, 85, 120];

const funify = function (pokemon) {
  if (!pokemon) return null;
  let adjective;
  pokemon.descriptions.map((desc) => {
    let adjs = adjectives[desc.stat.name];
    statBreakpoints.forEach((bp, i) => {
      if (desc.base_stat > bp) {
        const adjIndex = desc.base_stat % adjs[i].length;
        adjective = adjs[i][adjIndex];
      }
    });
    desc.stat.adjective = adjective;
    return desc;
  });
  return pokemon;
};
//descriptions[1].stat.name and .base_stat
