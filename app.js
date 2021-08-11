// const fs = require("fs"); //es propio de node
// const ex = require('express'); //paquete no nativo de node
// const miPackage = require('./path'); //paquetes que uno crea

// console.log(module);

// const multiplicar = require("./multiplicar/multiplicar");
// console.log(multiplicar);

const { argv } = require("./config/yargs");
const colors = require("colors/safe");
const { crearArchivo, listar } = require("./multiplicar/multiplicar");

console.log(argv);

let comando = argv._[0];

console.log(typeof argv.base);

switch (comando) {
  case "listar":
    console.log("listar");
    listar(argv.base, argv.limite);
    break;

  case "crear":
    // console.log("crear");
    crearArchivo(argv.base, argv.limite)
      .then((archivo) => {
        console.log(`Archivo creado: `, colors.green(archivo));
      })
      .catch((e) => console.log(e));
    break;

  default:
    console.log("comando no reconocido");
    break;
}

// let base = "abc";

//Vamos a crear un comando que reciba arg para la base:
//por consola mando: node app --base=5
// console.log(process.argv);
// let argv = process.argv;
// let argv2 = process.argv;

// console.log(argv);
// console.log(argv.base);
// console.log("limite ", argv.limite);

// let parametro = argv[2];
// let base = parametro.split("=")[1];

// console.log(base);

// crearArchivo(base)
//   .then((archivo) => {
//     console.log(`Archivo creado: ${archivo}`);
//   })
//   .catch((e) => console.log(e));
