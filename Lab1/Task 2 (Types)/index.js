'use strict';

const typeArray = [true, 'hello', 5, 12, -200, false, false, 'word', 'random', 8, true, 'test', -50, 100, false, 'code', true, 3, 7, -10, 'assist', false, 'value', true, 55, -80, 'string', 20, true, 'example', -30, 40, false, 15, 'q', true, 25, -60, 'data', 70, false, 'output'];

const typeCounter = {number: 0, string: 0, boolean: 0}


const countTypesInArray = (array, counter) => {
    for (const value of array) {
        counter[typeof value]++;
    }
    return counter;
}

console.log(countTypesInArray(typeArray, typeCounter));

module.exports = { countTypesInArray };