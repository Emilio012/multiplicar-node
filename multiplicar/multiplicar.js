// requireds
const fs = require('fs'); // propia de node
const colors = require('colors');

let list = '';
let listTable = (base, limit) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido de la base "${base}" no es un número!`)
            return;
        }

        if (!Number(limit)) {
            reject(`El valor introducido del límite "${limit}" no es un número!`)
            return;
        }

        console.log('========================='.green);
        console.log(`=== TABLA DEL ${base} ===`.green);
        console.log('========================='.green);

        for (let a = 1; a <= limit; a++) {
            list += `${base} x ${a} = ${base * a}\n`;
        }

        resolve(list);

    });

};

let createFile = (base, limit) => {
    //module.exports.createFile = (base) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido de la base "${base}" no es un número!`)
            return;
        }

        if (!Number(limit)) {
            reject(`El valor introducido del límite "${limit}" no es un número!`)
            return;
        }

        let data = '';

        for (let a = 1; a <= limit; a++) {
            //data = new Uint8Array(Buffer.from('Hello Node.js'));
            data += `${base} x ${a} = ${base * a}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`table-${base}.txt`);
            //console.log(`El archivo table-${base}.txt ha sido creado!`);
        });

    });

};

module.exports = {
    createFile,
    listTable
}