import { Pokedex } from 'pokeapi-js-wrapper';

const poke = new Pokedex();

export const fetchItem = async function(searchQuery){
    const pokemon = checkForError(
        await fetchPokemon(searchQuery)
    );

    return fitSchema(pokemon);
}

const fetchPokemon = async function(searchQuery){
    let result;
    if(!searchQuery) return {error: '', message: 'No search query'};
    try {
        result = await poke.getPokemonByName(searchQuery);
    }
    catch (error) {
        console.log(error);
        result = {error: error, message: 'There was a problem getting that item'};
    }
    console.log("fetch: ", result)
    return result;
}

const fetchCharacteristic = async function(id){
    let result;
    if(!id) return {error: '', message: 'No id'};
    try {
        result = await poke.getCharacteristicById(id);
    }
    catch (error) {
        console.log(error);
        result = {error: error, message: 'There was a problem getting that item'};
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

const checkForError = function(result){
    if(!result || 'error' in result) {
        console.log('Error: ', result?.message ? result.message : 'no fetch result');
        return result.message;
    };
    return result;
}
