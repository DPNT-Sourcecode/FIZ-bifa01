'use strict';

module.exports = function (number) {
    if (number < 1 || number > 9999) {
        throw new Error('Number must be between 1 and 9999');
    } 

    if (number % 15 === 0) {
        return 'fizz buzz';
    } else if (number % 5 === 0) {
        return 'buzz';
    } else if (number % 3 === 0) {
        return 'fizz';
    } else {
        
    }
};