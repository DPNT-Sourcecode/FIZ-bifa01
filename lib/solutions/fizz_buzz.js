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
    var isDeluxe = (parseInt(number) > 10) && (isSameDigit(number));

    if (hasFizz && hasBuzz && isDeluxe) {
        return 'fizz buzz deluxe';
    } else if (hasFizz && hasBuzz) {
        return 'fizz buzz';
    } else if (hasFizz) {
        return 'fizz';
    } else if (hasBuzz) {
        return 'buzz';
    } else if (isDeluxe) {
        return 'deluxe';
    } else {
        return number;
    }
};