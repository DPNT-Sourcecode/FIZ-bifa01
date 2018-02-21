'use strict';

module.exports = function (number) {
    if (number < 1 || number > 9999) {
        throw new Error('Number must be between 1 and 9999');
    } 

    var isSameDigit = function (numero) {
        return [11, 111, 1111].includes(numero / (numero % 10));
    }

    var hasFizz = (parseInt(number) % 3 === 0) || ((number + '').indexOf('3') > -1);
    var hasBuzz = (parseInt(number) % 5 === 0) || ((number + '').indexOf('5') > -1);
    var isDeluxe = (parseInt(number) > 10) && (isSameDigit(parseInt(number)));

    var returnValue = 'fizz buzz deluxe';
    if (!hasFizz) {
        returnValue = returnValue.replace('fizz', '');
    }

    if (!hasBuzz) {
        returnValue = returnValue.replace('buzz', '');
    }

    if (!isDeluxe) {
        returnValue = returnValue.replace('deluxe', '');
    }

    returnValue = returnValue.split(/\ +/).join(' ').trim();

    return (returnValue.length === 0)? number : returnValue;
};