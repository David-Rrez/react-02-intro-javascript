import heroes,{ owners } from "../data/heroes";
//import {heroes} from './data/heroes'
//console.log(heroes);
const getHeroes = (id)=>{
    return heroes.find( element => element.id == id);
}
const getHeroes2 = (id) => heroes.find((heroe) => heroe.id === id);

const getHeroesByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner);

// console.log(getHeroes(3))
// console.log(getHeroesByOwner('DC'))
// console.log(owners);

export {
    getHeroes as default,
    getHeroes2,
    getHeroesByOwner
}