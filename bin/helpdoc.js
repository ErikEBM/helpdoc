#! /usr/bin/env node
var fs = require("fs");
var parametro = process.argv[2];



// primer parametro significa ruta del archivo que quiero leer
// segundo parametro sea legible para humanos
// tercer parametro es un callback donde leo el archivo
fs.readFile('../comandos/' + parametro, 'utf8', (err, fd) => {
    if (err) {
    console.log(err);
    throw err; 
    }  
    console.log(fd);
});
