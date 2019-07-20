// Q1 Movies on Flight
// You are on a flight and wanna watch two movies during this flight.
//     You are given int[] movie_duration which includes all the movie durations.
//     You are also given the duration of the flight which is d in minutes.
//     Now, you need to pick two movies and the total duration of the two movies is less than or equal to (d - 30min).
// Find the pair of movies with the longest total duration. If multiple found, return the pair with the longest movie.
//
//     e.g.
//     Input
// movie_duration: [90, 85, 75, 60, 120, 150, 125]
// d: 250
//
// Output from aonecode.com
//     [90, 125]
// 90min + 125min = 215 is the maximum number within 220 (250min - 30min)/**
//  * Created by Sendurr on 4/22/19.
//  */

const movie_duration = [90, 85, 75, 60, 120, 150, 125];

function getMovies (movieList) {
    const movies = [];
    movieList.sort((a, b) => a - b);
    // console.log(movieList);
    return getMoviePair(movieList, [0, 0]);


}

function getMoviePair(movieList, max) {
    if (movieList[0] + movieList[movieList.length - 1]  === 220) {
        return [movieList[0], movieList[movieList.length - 1]];
    } else if (movieList.length == 2) {
        return max;
    } else if (movieList[0] + movieList[movieList.length - 1]  > 220) {
        movieList.splice(movieList.length - 1, 1);
        return getMoviePair(movieList, max);
    }
    movieList.splice(0, 1);
    return getMoviePair(movieList, max);

}

console.log(getMovies(movie_duration));