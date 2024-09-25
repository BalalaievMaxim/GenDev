'use strict';

const typeArray = [42, "hello", true, null, 3.14, -7, "world", false, undefined, Symbol("random"), BigInt(1234567890), NaN, 0, "javascript", -Infinity, 2n, Symbol.for("registered"), 1e10, "", -0, "🎉", Number.MAX_SAFE_INTEGER, false, "   ", Number.MIN_SAFE_INTEGER, BigInt("9007199254740991"), true, "\t\n", Number.EPSILON, Symbol("unique"), "123", Infinity, null, -3.14159265359, "array"]

const typeCounter = {};


const countTypesInArray = (array, counter) => {
    for (const value of array) {
        const type = typeof value;
        type in counter ? counter[type]++ : counter[type] = 1;
    }
    return counter;
}

console.log(countTypesInArray(typeArray, typeCounter));

module.exports = { countTypesInArray };