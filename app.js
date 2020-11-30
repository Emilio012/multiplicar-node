// requireds
const { argv } = require('./config/yargs');
const colors = require('colors');

const { createFile, listTable } = require('./multiplicar/multiplicar');

let command = argv._[0];

switch (command) {
    case 'listar':
        listTable(argv.base, argv.limite)
            .then(list => console.log(`${list}`))
            .catch(err => console.log(err));
        break;

    case 'crear':
        createFile(argv.base, argv.limite)
            .then(file => console.log(`Archivo creado: ${file.red}`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido');

}
//const fs = require('fs'); // propia de node
//const express = require('express'); // externos
//const us = require('./us'); // propio de nuestro código


//let base = 'abc';
//console.log(process.argv);
//let argv2 = process.argv;
//console.log(argv.base);
//console.log('Límite', argv.limite);
//console.log(argv2);
//let parameter = argv[2];
//console.log(parameter);
//let base = parameter.split('=')[1];
//console.log(base);
/*let data = '';

for (let a = 1; a <= 10; a++) {
    //data = new Uint8Array(Buffer.from('Hello Node.js'));
    data += `${base} x ${a} = ${base * a}\n`;
}

fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo table-${base}.txt ha sido creado!`);
});*/

//createFile(base)
//    .then(file => console.log(`Archivo creado: ${file}`))
//    .catch(err => console.log(err));
//console.log(createFile);