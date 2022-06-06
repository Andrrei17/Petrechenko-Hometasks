// 'use strict';

let numberOfFilms;

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function  () {
        numberOfFilms = +prompt('Сколько фильмов Вы уже просмотрели', '');  
     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов Вы уже просмотрели', ''); 
        }
    },
    rememberMyFilms: function  () {
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
    },

    detectPersonalLevel: function () {
        if (personalMovieDB.count <= 10){
            console.log ('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count <=30){
            console.log ('Вы классический зритель');
        } else if (personalMovieDB.count > 30){
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },

    showMyDB: function (hidden) {
        if (hidden){
        console.log (personalMovieDB);
        }
    },

    writeYourGenres: function() {
        for(let i=0; i<3; i++) {
            let answers = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            if (answers == null || answers == ''){
                i --;
            } else {
            personalMovieDB.genres[i] = answers;
        }

        }
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat == false){
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false; 
        }
    }
};

personalMovieDB.start();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();

personalMovieDB.genres.forEach((item, i) => {
    console.log(`Любимый жанр ${i +1 } это ${item}`);
});



