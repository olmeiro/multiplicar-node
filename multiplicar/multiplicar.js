const fs = require("fs"); //file system
const colors = require("colors");

let listar = (base, limite = 10) => {
  console.log("==============================".green);
  console.log(`=======tabla de ${base}=======`.green);
  console.log("==============================".green);

  for (let i = 1; i <= limite; i++) {
    console.log(`${base} * ${i} = ${base * i}`);
  }
};

let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor dado ${base} no es un número`);
      return;
    }

    let data = "";

    for (let i = 1; i <= limite; i++) {
      //   console.log(`${base} * ${i} = ${base * i}`);
      data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(`tabla-${base}-al-${limite}.txt`);
      }
    });
  });
};

module.exports = {
  crearArchivo,
  listar,
};
