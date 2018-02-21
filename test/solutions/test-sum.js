var sum = require('../../lib/solutions/sum');

exports['compute sum'] = function (test) {
    test.equal(sum(1, 2), 3);
    test.throws(function () { sum(-5, 1) }, Error, 'first number not OK');
    test.throws(function () { sum(5, -1) }, Error, 'second number not OK');
    test.throws(function () { sum(105, 106) }, Error, 'numbers not OK');
    test.done();
};
