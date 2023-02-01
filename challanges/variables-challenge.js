let favoriteMovies = "Ironman Jungle Book Walle The Menu Kill Bill";

let firstMovie = favoriteMovies.slice(0, 7);

console.log(firstMovie);
console.log(favoriteMovies);

let secoundMovie = favoriteMovies.slice(8, 19);
console.log(secoundMovie);

console.log(firstMovie.slice(0, 6) + firstMovie.charAt(6).toUpperCase());

console.log(secoundMovie.slice(0, 10) + secoundMovie.charAt(10).toUpperCase());
