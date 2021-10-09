"use strict";
//1
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");


//2
const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a =  prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?',''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?','');

//Обращаемся к мувиес сначала пишем ключ, а потом значение.
personaMovieDB.movies[a] = b;
personaMovieDB.movies[c] = d;
console.log(personaMovieDB);