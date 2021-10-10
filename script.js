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

for (let i = 0; i < 2; i++){
    const a =  prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?','');
    if (a != '' && b !='' && a != null && b != null && a.length < 50){
        personaMovieDB.movies[a] = b;
        console.log('done');
    }else{
        console.log('Error');
        //Как вернуться на один цикл назад???
        //Оператор инкремента
        i--;
    }
}
if(personaMovieDB.count < 10){
    alert("Просмотрено довольно мало фмльмов!!!");
}
else if(10 <= personaMovieDB.count < 30){
    alert("Вы класический зритель!");
}
else if(personaMovieDB.count > 30){
    alert('Вы киноман!');
}
else{
    alert('Произошла ошибка');
}

console.log(personaMovieDB);
