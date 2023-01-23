// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  return moviesArray.map((val)=> val.director)
  };


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
const moviesDramaBySS = moviesArray.filter((movie) => movie.director === 'Steven Spielberg' && movie.genre.includes('Drama'));
return moviesDramaBySS.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) { 
if (moviesArray.length === 0){

 return 0;
}
const totalScore = moviesArray.reduce((accumulator, currentvalue) => {
    if(!currentvalue.score) {
        return accumulator;
    } 
    else {
        return accumulator + currentvalue.score;
    }
},0);

let averageScore = totalScore / moviesArray.length;
let numb =Number( averageScore.toFixed(2)) 
return numb

//busque esta formula en internet y la sustitui con los datos y me da correcto, pero no la entiendo.
//    return Math.round(averageScore * 100) / 100;

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if(moviesArray.length === 0){
        return 0;
    }
        const movFilter = moviesArray.filter((movie) => {
            return movie.genre.includes('Drama')
        });
    
    return scoresAverage(movFilter);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    
    const newCopy = moviesArray.map((movies)=> movies)
    newCopy.sort((a,b) => {
        if((a.year - b.year) === 0) {
            if(a.title.toLowerCase() < b.title.toLowerCase()) return - 1 ;
            else if (a.title.toLowerCase() > b.title.toLowerCase()) return 1 ;
            else return 0 ;
        }
         else return a.year - b.year;
        
    });
    return newCopy;
}



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const movieTitles = moviesArray.map(function (movie) {
        return movie.title;
    })
    const ordenAlfabetico = movieTitles.sort().slice(0, 20);
    return ordenAlfabetico
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    if(!moviesArray.length){
        return null
    }
}
