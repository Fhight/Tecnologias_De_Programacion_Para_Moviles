const arreglo = (data) => {
  let newData = data.filter((item) => item.id % 2 === 0);
  newData.forEach((element) => {
    if (element.type === '') return (element.type = 'Programación Móvil');
  });
  const finalData = newData.map((element) => {
    return {
      personaje: element.name,
      episodios: element.episode.length,
      masDeCincoEpisodios: element.episode.length > 5 ? 'Si' : 'No',
    };
  });

  console.log('3. Data:');
  console.log(finalData);
};

const getData = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const { results } = await response.json();
  arreglo(results);
};

getData();

// 3.- Utilizando la API de RickAndMorty https://rickandmortyapi.com/ obtener los datos de
// este endpoint https://rickandmortyapi.com/api/character y mostrarlos en consola.
// Ya con los datos realizar las siguientes operaciones:
// • Filtrar todos los personajes que tengan un ID par
// • A todos los personajes que su propiedad type sea un string vacío, asignarles el
// valor “Programación Móvil” y mostrar nuevamente todos los personajes.
// • Crear un arreglo de objetos a partir de la información de los personajes donde
// por cada uno de ellos, regresar un objeto con la siguiente estructura
