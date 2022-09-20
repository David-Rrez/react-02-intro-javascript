const personajes = ['Goku','Vegeta','Ichigo'];
const [,,p1] = personajes;
console.log(p1)

const retornaArreglo = ()=> {
    return ['ABC',123]
};

const [letras,numeros] = retornaArreglo();
console.table(letras,numeros);

/*
Tarea
1: el primer valor se del arr se llamara nombre
2: el segundo valor se llamara setNombre
*/
const returnaSetState = (valor) => {
    return [valor, () => console.log("Hola Mundo")]
};

const [nombre,setNombre] = returnaSetState('Asta');
console.log(nombre);
setNombre();
