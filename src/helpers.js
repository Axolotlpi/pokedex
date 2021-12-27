import { Pokedex } from 'pokeapi-js-wrapper';

const poke = new Pokedex();

export const fetchItems = async function(searchQuery){
    let result = await fetchPokemon(searchQuery);
    console.log("items: ", result);
    if('error' in result) {
        console.log("returning error");
        return result;
    };
    return fitSchema(result);
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

const fitSchema = function(result){
    result = Array.isArray(result) ? result : [result];
    return result.map(res => 
        ({
            name: res.name,
            description: res.species.name,
            img: res.sprites.front_default,
            id: res.id
        }));
}
