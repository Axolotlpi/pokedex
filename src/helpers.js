import { Pokedex } from 'pokeapi-js-wrapper';

const poke = new Pokedex();

export const fetchItem = async function(searchQuery){
    return fitSchema(await fetchPokemon(searchQuery));
}

let errorListener;

export const setListener = function(callback){
    errorListener = callback;
}

const fetchPokemon = async function(searchQuery){
    let result;
    if(!searchQuery) {
        notifyError('No search query');
    }
    try {
        result = await poke.getPokemonByName(searchQuery);
    }
    catch (error) {
        notifyError('Could not fetch that item')
    }
    console.log("fetch: ", result)
    return result;
}

const fetchCharacteristic = async function(id){
    let result;
    if(!id) {
        notifyError('No characterstic id found');
    };
    try {
        result = await poke.getCharacteristicById(id);
    }
    catch (error) {
        console.log(error);
        notifyError('Could not fetch the characteristic')
    }
    console.log("fetch characteristic: ", result)
    return result;
}

const fitSchema = async function(pokemon){
    return ({
        name: pokemon.name,
        descriptions: pokemon.stats,
        img: pokemon.sprites.front_default,
        id: pokemon.id
    });
}

const notifyError = function(message){
    errorListener && errorListener(message);
    console.log('Error: ', message);
}

