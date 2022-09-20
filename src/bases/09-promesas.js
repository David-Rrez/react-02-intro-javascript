import getHeroes,{ getHeroes2,getHeroesByOwner } from "./bases/08-imp-exp";

// const promesa = new Promise( (resolve,reject) => {
//     setTimeout( () => {
//         const h1 = getHeroes2(1);
//         const heroesOwners = getHeroesByOwner('DC');
//         console.log(h1);
//         console.log(heroesOwners)
//         resolve(h1);
//         // reject('No se pudo encontrar el héroe');
//     },2000);
// });
// promesa.then( (heroe)=>{
//     console.log('Heroe: ',heroe)
// })
// .catch( err=> console.warn( err))

const getHeroeByIdAsync = (id) =>{
    return new Promise( (resolve,reject) => {
    setTimeout( () => {
        const h1 = getHeroes2(id);
        if (h1 != undefined) {
            //console.log(h1);
            resolve(h1);
        }
        else{
            reject('No se pudo encontrar el héroe');
        }
    },2000);
});

}
getHeroeByIdAsync(4)
.then( console.log)
// .catch( err=> console.log(err));
.catch(console.warn)
