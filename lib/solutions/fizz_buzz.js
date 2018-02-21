'use strict';

module.exports = function (number) {
    if (number < 1 || number > 9999) {
        throw new Error('Number must be between 1 and 9999');
    } 

    var hasFizz = (parseInt(number) % 3 === 0) || ((number + '').indexOf('3') > -1);
    var hasBuzz = (parseInt(number) % 5 === 0) || ((number + '').indexOf('5') > -1);

    if (hasFizz && hasBuzz) {
        return 'fizz buzz';
    } else if (hasFizz) {
        return 'fizz';
    } else if (hasBuzz) {
        return 'buzz';
    } else {
        return number;
    }
};
