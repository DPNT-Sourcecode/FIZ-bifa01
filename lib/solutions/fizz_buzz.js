'use strict';

module.exports = function (number) {
    if (number < 1 || number > 9999) {
        throw new Error('Number must be between 1 and 9999');
    } 

    var hasFizz = (number % 3 === 0) || (number.toString().indexOf('3') > -1);
    var hasBuzz = (number % 5 === 0) || (number.toString().indexOf('5') > -1);
};