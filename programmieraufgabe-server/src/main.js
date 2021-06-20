function executeMain(){
    var person = getPerson("Nicolas", "Hormesch", 30, "blau");
    console.log("TEMPTESTNH36434 person: " + person.firstName);
    person.firstName = "Hans";
    console.log("TEMPTESTNH36434 person: " + person.firstName);

    var resultArr = [];
    resultArr.push("Test 1");
    resultArr.push("Test 2");

    return resultArr;
}

function getPerson(firstName, lastName, age, eyeColor){
    const person = new Object();
    person.firstName = firstName;
    person.lastName = lastName;
    person.age = age;
    person.eyeColor = eyeColor;

    return person;
}

//executeMain();

module.exports = {
    executeMain
};