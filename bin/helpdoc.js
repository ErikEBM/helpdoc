#! /usr/bin/env node
const fs = require("fs");
const path = require('path');
const parametro = process.argv[2];

// con path.resolve (__dirname) obtengo la ruta absoluta hasta mi carpeta
const rutaabsoluta = path.resolve(__dirname) + "/..";

if(parametro == null){
    console.log("ingrese un parametro");
    process.exit();
    
}


function listarArchivos(){
   let files = fs.readdirSync(rutaabsoluta + "/comandos/");
   
   files.forEach((e, i)=>{
       console.log((i+1) + ". " + e);
   })
}

function mostrarDoc(){
    fs.readFile( rutaabsoluta + "/comandos/" + parametro, 'utf8', (err, fd) => {
        if (err) {
        console.log(err);
        throw err; 
        }  
        console.log(fd);
    });
}

switch(parametro){
    case "ls": listarArchivos();
               break;
    default: mostrarDoc();
                break;

}





// primer parametro significa ruta del archivo que quiero leer
// segundo parametro sea legible para humanos
// tercer parametro es un callback donde leo el archivo
/*

*/

