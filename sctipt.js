'use strict';

const numberOfFilms = +prompt('Скльео фильмов Вы уже просмотрели', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    prival: false
};



const a = prompt('Один из последних просмотренных фильмов?', '');
const b = prompt('На сколько оцените его?', "");
const c = prompt('Один из последних просмотренных фильмов?', '');
const d = prompt('На сколько оцените его?', "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB.count);