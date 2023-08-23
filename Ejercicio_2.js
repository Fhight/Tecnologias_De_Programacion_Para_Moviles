const combinaciones = (array) => {
    let newArray = [];
    newArray.push([]); 
    for (let i = 0; i < array.length; i++) {
      const combinacion = [];
      for (let j = 0; j < newArray.length; j++) {
        combinacion.push([...newArray[j], array[i]]);
      }
      newArray.push(...combinacion);
    }
    return newArray;
  };
  
  const array = [1, 2, 3];
  console.log('2. Data:');
  console.log(combinaciones(array));
  

// const prueba = () => {
//   let array = [[2, 3]];
//   let array2 = 1;
//   array.push(array2);
//   console.log(array);
// };

// prueba();

// 2.- Dado un arreglo de “n” números, genera una función que devuelva todas las
// combinaciones de arreglos posibles que se puedan crear con el arreglo original.
// Ejemplo
// Input: [a, b, c]
// Output: [[],[a],[b],[a,b],[c],[a,c],[b,c],[a,b,c]]
