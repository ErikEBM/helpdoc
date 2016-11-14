#! /usr/bin/env node
const fs = require("fs");
const path = require('path');
const parametro = process.argv[2];
const rutaabsoluta = path.resolve(__dirname) + "/..";



// primer parametro significa ruta del archivo que quiero leer
// segundo parametro sea legible para humanos
// tercer parametro es un callback donde leo el archivo

fs.readFile( rutaabsoluta + "/comandos/" + parametro, 'utf8', (err, fd) => {
    if (err) {
    console.log(err);
    throw err; 
    }  
    console.log(fd);
});

