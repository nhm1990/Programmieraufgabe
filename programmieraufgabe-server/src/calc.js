//"use strict";

function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function main(){
    var person = getPerson("Nicolas", "Hormesch", 30, "blau");
    console.log("TEMPTESTNH36434 person: " + person.firstName);

    person.firstName = "Hans";

    console.log("TEMPTESTNH36434 person: " + person.firstName);
}

function getPerson(firstName, lastName, age, eyeColor){
    const person = new Object();
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;
    person.eyeColor = eyeColor;

    return person;
}

module.exports = {
    add,
    sub,
    main
};

//console.log(module);