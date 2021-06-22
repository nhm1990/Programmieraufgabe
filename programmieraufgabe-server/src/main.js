//var n = 51;
//executeMain(n);

async function executeMain(n){
    const transform = new Transform(n);
    palindromeNumber = palindrome(transform.number);
    console.log("TEMPTESTNH2732634 palindromeNumber: " + palindromeNumber);
    return palindromeNumber;
}

function Transform(number) {
    this.number = number
}

function palindrome(number){
    var reversedNumber = 0;
    var isPalindom = false;
    do{
        isPalindom = checkIsPalindrom(number);
        if(isPalindom == true){
            return number;
        }
        reversedNumber = reverseNumber(number);
        number = sumNumber(number, reversedNumber);
        isPalindom = checkIsPalindrom(number);
        if(numberHasMaxLength(number) == true){
            return -1;
        }
    }
    while (isPalindom == false);

    return number;
}

function reverseNumber(number){
    if(number){
        number = ""+number;
        return number.split("").reverse().join("")*1;
    }
}

function sumNumber(numberA, numberB){
    if(numberA && numberB){
        return numberA*1 + numberB*1;
    }
}

function numberHasMaxLength(number){
    if(number*1 > 1000000000){
        return true;
    }
    return false;
}

function checkIsPalindrom(number){
    var rem = 0;
    var temp = 0;
    var final = 0;
    temp = number;
    while(number > 0){
        rem = number%10;
        number = parseInt(number/10);
        final = final*10+rem;
    }

    if(final==temp){
        return true;
    }
    return false;
}

module.exports = {
    executeMain,
    sumNumber,
    numberHasMaxLength,
    checkIsPalindrom,
    reverseNumber,
    palindrome
};