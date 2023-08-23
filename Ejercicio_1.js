const formatoCamelCase = cadena => {
  let cont = 0;
  let compare = cadena.toUpperCase();
  let snakeCase = '';
  for (let i = 0; i < cadena.length; i++) {
    if (i === 0) {
      continue;
    }
    if (compare[i] === cadena[i]) {
      if (snakeCase === '')
        snakeCase =
          cadena.substring(0, i) + '_' + cadena.substring(i, cadena.length);
      else
        snakeCase =
          snakeCase.substring(0, i + cont) +
          '_' +
          cadena.substring(i, cadena.length);
      cont++;
    }
  }
  return {
    palabras: cont + 1,
    snakeCase: snakeCase,
  };
};

console.log('1. Data:')
console.log(formatoCamelCase('MateriaProgramaciónMóvil'));

// 1.- Dado un string de longitud “n” en formato CamelCase, devuelve el número de palabras 
// que contiene dicho string, así como el mismo string pero en formato snake_case
// Ejemplo:
// Input: MateriaProgramaciónMóvil
// Output: {
// palabras: 3,
// snakeCase: Materia_Programación_Móvil
// }