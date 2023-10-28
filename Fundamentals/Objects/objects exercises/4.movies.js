function movies(info) {
  let movies = [];

  function adding(curr, splitting, array, key) {
    let [movie, added] = curr.split(splitting);
    array.filter((mov) => {
      if (mov.name === movie) {
        mov[key] = added;
      }
    });
  }

  for (let current of info) {
    if (current.includes("addMovie")) {
      let name = current.split("addMovie ")[1];
      movies.push({ name });
    } else if (current.includes("directedBy")) {
      adding(current, " directedBy ", movies, "director");
    } else if (current.includes("onDate")) {
      adding(current, " onDate ", movies, "date");
    }
  }

  for (let curr of movies) {
    if (curr.name && curr.director && curr.date) {
      console.log(JSON.stringify(curr));
    }
  }
}

movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "addMovie Pesho",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis FordCoppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
