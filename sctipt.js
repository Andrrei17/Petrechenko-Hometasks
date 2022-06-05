// 'use strict';

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов Вы уже просмотрели', '');  
 while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
    numberOfFilms = +prompt('Сколько фильмов Вы уже просмотрели', ''); 
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms () {
    for (let i = 0; i < 2; i ++ ) {
        const a = prompt('Один из последних просмотренных фильмов?', '');
        const b = prompt('На сколько оцените его?', "");
       
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
           personalMovieDB.movies[a] = b;
           console.log ('done');
        }else {
            i--;
            console.log('error');
        }   
   }
}
   

    function detectPersonalLevel() {
        if (personalMovieDB.count <= 10){
            console.log ('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count <=30){
            console.log ('Вы классический зритель');
        } else if (personalMovieDB.count > 30){
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    }

    function showMyDB (hidden) {
        if (!hidden){
        console.log (personalMovieDB);
        }
    }

    function writeYourGenres () {
        for(let i=0; i<3; i++) {
            let answers = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            personalMovieDB.genres[i] = answers;
        }
      
    }

writeYourGenres();
showMyDB(personalMovieDB.privat);
rememberMyFilms();
detectPersonalLevel();




