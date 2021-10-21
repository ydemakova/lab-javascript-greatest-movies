// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(arrMovies) {
	return arrMovies.map((objMovie) => {
		return objMovie.director;
	});
}

// *******************************************************
//Iteration 1.1
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getUniqueNames(arrMovies) {
	return arrMovies.reduce((arrDirs, movie) => {
		if (movie.director && !arrDirs.includes(movie.director)) {
			arrDirs.push(movie.director);
		}
		return arrDirs;
	}, []);
	// const arrDirectors = arrMovies.map((objMovie) => {
	// 	return objMovie.director;
	// });
	// return [...new Set(arrDirectors)];
}
// *******************************************************

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

// My comment: BAD task explanation in README >> the number or the array of drama movies???
/*function howManyMovies(movieArray) {
	 let spilbergDrama = [];
	 spilbergDrama.push(movieArr.filter(movie => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'))
	return spilbergDrama;
}*/
function howManyMovies(movieArray) {
	let dramaMovies = movieArray.filter(
		(movie) =>
			movie.director === 'Steven Spielberg' && movie.genre.includes('Drama')
	);
	return dramaMovies.length;
}
// *******************************************************

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
	if (!movies.length) {
		return 0;
	}

	let averageScore =
		movies.reduce((sum, movie) => {
			if (!movie.score) {
				return sum;
			}
			sum += movie.score;
			return sum;
		}, 0) / movies.length;
	return Math.round(averageScore * 100) / 100;
}

// *******************************************************

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movieArray) {
	let dramaMovies = movieArray.filter((movie) => movie.genre.includes('Drama'));
	if (!dramaMovies.length) {
		return 0;
	}
	let counter = dramaMovies.reduce((sum, movie) => {
		sum += movie.score;
		return sum;
	}, 0);
	return Math.round((counter / dramaMovies.length) * 100) / 100;
}

// *******************************************************

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
	const moviesArray = [...movies];
	moviesArray.sort((movie1, movie2) => {
		if (movie1.year > movie2.year) return 1;
		if (movie1.year < movie2.year) return -1;
		return 0;
	});
	console.log(typeof moviesArray);
	return moviesArray;
}

// *******************************************************

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// *******************************************************

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// *******************************************************

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// *******************************************************

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
	module.exports = {
		getAllDirectors,
		howManyMovies,
		scoresAverage,
		dramaMoviesScore,
		orderByYear,
		orderAlphabetically,
		turnHoursToMinutes,
		bestYearAvg
	};
}
