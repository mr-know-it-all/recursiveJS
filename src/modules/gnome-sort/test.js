const gnomeSort = require('./gnome-sort.js');
const compose = require('../compose/compose.js');
const { expect } = require('../../../tests/tests.js');

function gnomeSort_test() {
  compose(
    () => expect('gnomeSort test', [0, 1, 1, 1, 2, 3, 4, 4, 42, 42, 219], gnomeSort([0, 42, 42, 219, 1, 2, 4, 1, 3, 4, 1])),
    () => expect('gnomeSort test', [1324, 2122, 3540, 4000, 5251, 6001, 7901, 8234, 9111, 11400], gnomeSort([3540, 7901, 8234, 9111, 11400, 4000, 5251, 6001, 1324, 2122])),
    () => expect('gnomeSort test', [1, 2, 3, 4, 5, 6, 7, 8, 9, 23, 1400], gnomeSort([7, 1400, 2, 1, 3, 5, 4, 23, 6, 9, 8])),
    () => expect('gnomeSort test', [1, 2, 3, 4, 5, 6, 7, 8, 9], gnomeSort([9, 8, 7, 6, 5, 4, 3, 2, 1])),
    () => expect('gnomeSort test', [1, 2, 3, 4, 5, 6, 7, 8, 9], gnomeSort([7, 2, 1, 3, 5, 4, 6, 9, 8])),
    () => expect('gnomeSort test', [-2, 1, 10, 25, 34, 55, 67, 523], gnomeSort([55, 67, 10, 34, 25, 523, 1, -2])),
    () => expect('gnomeSort test', [12345, 21234, 33452, 41235, 53454, 65431, 73456, 81234, 94323], gnomeSort([94323, 21234, 65431, 41235, 53454, 81234, 73456, 33452, 12345]))
  )()
}

module.exports = gnomeSort_test;
