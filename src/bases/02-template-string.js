//console.log("Hola Mundo");
const nombre = 'User02';
const apellidos = 'Sanchez';
//const nombreCompleto = nombre + ' '+ apellidos;
const nombreCompleto = `
${nombre}
${apellidos}
${1+1}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'Hola Mundo '+nombre;;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`)

