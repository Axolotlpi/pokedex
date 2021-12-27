import { Pokedex } from 'pokeapi-js-wrapper';

const poke = new Pokedex();

export const fetchItems = async function(searchQuery){
    return fitSchema( await fetchPokemon(searchQuery));
}

const fetchPokemon = async function(searchQuery){
    let result;
    try {
        result = await poke.getPokemonByName(searchQuery);
    }
    catch (error) {
        console.log(error);
        result = {error: error, message: 'There was a problem getting that item'};
    }
    console.log(result)
    return result;
}

const fitSchema = async function(result){
    result = Array.isArray(result) ? result : [result];
    return result.map(res => {
        if(res.error){
            return null;
        }
        return {
            name: res.name,
            description: res.species.name,
            img: res.sprites.front_default,
            id: res.id
        }});
}