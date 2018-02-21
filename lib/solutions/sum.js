'use strict';

module.exports = function (x, y) {
    if (x < 0 || x > 100) {
        throw new Error('First number must be between 0 and 100');
    } else if (y < 0 || y > 100) {
        throw new Error('Second number must be between 0 and 100');
    } else {
        return x + y;
    }
};