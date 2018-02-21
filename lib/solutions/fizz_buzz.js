'use strict';

module.exports = function (number) {
    if (number < 1 || number > 9999) {
        throw new Error('Number must be between 1 and 9999');
    } 

    var isSameDigit = function (numero) {
        return [11, 111, 1111].includes(numero / (numero % 10));
    }

    var containsFizz = ((number + '').indexOf('3') > -1);
    var isFizz = (parseInt(number) % 3 === 0);

    var containsBuzz = ((number + '').indexOf('5') > -1);
    var isBuzz = (parseInt(number) % 5 === 0);

    var isDeluxe = (parseInt(number) > 10) && (isSameDigit(parseInt(number)));

    var returnValue = ''; 
    if(containsBuzz && containsFizz && isFizz && isBuzz){
        returnValue = 'fizz buzz deluxe';
    } else if(containsFizz && isFizz) {
        returnValue = 'fizz deluxe';
    } else if (containsBuzz && isBuzz) {
        returnValue = 'buzz deluxe';
    } else if ((containsFizz || isFizz) && (containsFizz && isBuzz)){
        returnValue = 'fizz buzz';
    } else if (containsBuzz || isBuzz){
        returnValue = 'buzz';
    } else if (containsFizz || isFizz){
        returnValue = 'fizz';
    }


    if(number % 2 === 0){
        returnValue = returnValue.replace('deluxe', 'fake deluxe');
    }

    // var returnValue = 'fizz buzz deluxe';
    // var returnValue = '';
    // if(hasFizz && hasBuzz && isDeluxe){
    //     returnValue = 'fizz buzz deluxe';
    // } else if(hasFizz) {
    //     returnValue = 'fizz delu'
    // }


    // if (!hasFizz) {
    //     returnValue = returnValue.replace('fizz', '');
    // }

    // if (!hasBuzz) {
    //     returnValue = returnValue.replace('buzz', '');
    // }

    // if (!isDeluxe) {
    //     returnValue = returnValue.replace('deluxe', '');
    // }

    // if (number % 2 === 1) {
    //     returnValue = returnValue.replace('deluxe', 'fake deluxe');
    // }

    // returnValue = returnValue.split(/\ +/).join(' ').trim();

    return (returnValue.length === 0)? number : returnValue;
};
