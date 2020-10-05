/**
 *̶ ̶T̶O̶D̶O̶:̶ ̶C̶h̶a̶n̶g̶e̶ ̶s̶o̶r̶t̶M̶o̶v̶i̶e̶s̶B̶y̶R̶a̶n̶k̶(̶)̶ ̶f̶u̶n̶c̶t̶i̶o̶n̶ ̶t̶o̶ ̶s̶o̶r̶t̶ ̶m̶o̶v̶i̶e̶s̶ ̶l̶i̶s̶t̶ ̶b̶y̶ ̶r̶a̶n̶k̶
 *̶ ̶T̶O̶D̶O̶:̶ ̶S̶o̶r̶t̶ ̶m̶o̶v̶i̶e̶s̶ ̶b̶y̶ ̶i̶d̶,̶ ̶r̶a̶n̶k̶,̶ ̶a̶n̶d̶ ̶t̶i̶t̶l̶e̶ ̶t̶h̶r̶o̶u̶g̶h̶ ̶d̶y̶n̶a̶m̶i̶c̶ ̶f̶u̶n̶c̶t̶i̶o̶n̶
 ̶*̶ ̶T̶O̶D̶O̶:̶ ̶C̶r̶e̶a̶t̶e̶ ̶h̶e̶l̶p̶e̶r̶ ̶f̶u̶n̶c̶t̶i̶o̶n̶ ̶c̶a̶l̶l̶e̶d̶ ̶g̶e̶t̶M̶a̶x̶M̶o̶v̶i̶e̶O̶b̶j̶e̶c̶t̶(̶)̶ ̶f̶o̶r̶ ̶f̶i̶n̶d̶i̶n̶g̶ ̶m̶a̶x̶ ̶m̶o̶v̶i̶e̶
 */

// List of movies
let movies = [
    {
        title: "Fight Club",
        rank: 10,
        id: "tt0137523"
    },
    {
        title: "The Shawshank Redemption",
        rank: 1,
        id: "tt0111161"
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        rank: 9,
        id: "tt0167260"
    },
    {
        title: "The Godfather",
        rank: 2,
        id: "tt0068646"
    },
    {
        title: "The Good, the Bad and the Ugly",
        rank: 5,
        id: "tt0060196"
    },
    {
        title: "The Godfather: Part II",
        rank: 3,
        id: "tt0071562"
    },
    {
        title: "The Dark Knight",
        rank: 6,
        id: "tt0468569"
    },
    {
        title: "Pulp Fiction",
        rank: 4,
        id: "tt0110912"
    },
    {
        title: "Schindler's List",
        rank: 8,
        id: "tt0108052"
    },
    {
        title: "12 Angry Men",
        rank: 7,
        id: "tt0050083"
    }
]

window.onload = function() {
    let sortedMovies = sortMoviesByAttr(movies, "rank")
    // Display Movies list
    displayMovies(sortedMovies);
}

/**
 * Display list of movies in a table
 * You don't have to worry so much about this
 */
function displayMovies(movies){
    let table = "<table border='1' style='width: 100%'>";
    table += "<tr><th>ID</th><th>Name</th><th>Rank</th></tr>";
    for(let index=0; index<movies.length; index++){
        table += "<tr>";
        table += "<td>" + movies[index].id + "</td>";
        table += "<td>" + movies[index].title + "</td>";
        table += "<td>" + movies[index].rank + "</td>";
        table += "</tr>"
    }
    // Close the table
    table += "</table>";
    document.getElementById("movies-list").innerHTML = table;
}


/**
 * Sort movies by rank from greatest to smallest 
 * HINT: make sure you are comparing the right value in in if(...)
 * HINT: replace numbers with movies .
 */
function sortMoviesByRank(movies){
  // Code from previous sortBestRatingsFirst() function
  for (let j = 0; j < movies.length - 1; j++) {

      let max_num = movies[j];
      let max_location = j;

      for (let i = j; i < movies.length; i++) {
          if (movies[i].rank > max_num.rank) {
              // Know max AND it's index (location)
              max_num = movies[i]
              max_location = i
          }
      }
      // swap the first and the last
      movies[max_location] = movies[j] // --> 10
      movies[j] = max_num
  }

  return movies
}

/**
 * Sort movies by an attribute
 * @param sortAttr pass in 'id', 'title', or 'rank' to sort by
 */
function sortMoviesByAttr(movies, sortAttr){
  // CODE GOES HERE
  // Code from previous sortBestRatingsFirst() function
  for (let j = 0; j < movies.length - 1; j++) {

      let max_num = movies[j];
      let max_location = j;

      let maxMovie = getMaxMovieObject(movies, j, sortAttr)
      // swap the first and the last
      movies[maxMovie.max_index] = movies[j] // --> 10
      movies[j] = maxMovie.max_number
  }

  return movies
}


/**
 * Retrieve the max movie object based on attribute
 * HINT: make sure you are comparing the right attribute
 */
function getMaxMovieObject(movies, start, sortAttr){
  // Code from previous findMaxHelper() function
  let maximum = movies[start];
  let max_location = start

  for (let i = start; i < movies.length; i++) {
      if (movies[i][sortAttr] > maximum[sortAttr]) {
          maximum = movies[i]
          max_location = i
      }
  }
  return {max_number: maximum, max_index: max_location}
}



