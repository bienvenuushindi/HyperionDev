"use strict";
exports.__esModule = true;
exports.smallNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
exports.specialTens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
exports.largeNumbers = ['hundred', 'thousand', 'million', 'billion', 'trillion'];

/**
 * The function isPositive() checks if the number is greater than 0
 * and returns true if it is. Otherwise, it throws an error.
 * @param number
 * @returns {boolean}
 */
function isPositive(number) {
    if (number >= 0)
        return true;
    throw new Error('Invalid input. Number should be greater or equal to 0');
}

exports.isPositive = isPositive;

/**
 *  This function checks the length of the number
 *  and returns true if it is less than or equal to 15.
 *  Otherwise, it throws an error.
 * @param number
 * @returns {boolean}
 */
function isInValidRange(number) {
    var upperLimit = 16;
    var numberOfDigits = number.toString().length;
    if (numberOfDigits < upperLimit)
        return true;
    throw new Error('Invalid input. Number should not exceed 999,999,999,999,999');
}

exports.isInValidRange = isInValidRange;

/**
 * The function groupInChunksOfThree() takes a number and
 * splits it into an array of chunks of three characters each.
 *  It then returns the array of chunks.
 * @param number
 * @returns {*[]}
 */
function groupInChunksOfThree(number) {
    var str = number.toString();
    var characters = str.split('').reverse();
    var chunks = [];
    for (var i = 0; i < str.length; i += 3) {
        chunks.push(characters.slice(i, i + 3).reverse().join(''));
    }
    return chunks.map(function (item) {
        return parseInt(item);
    });
}

exports.groupInChunksOfThree = groupInChunksOfThree;

/**
 * The function handleTens() reads the number passed as an argument and returns the corresponding string.
 * @param number
 * @returns {string}
 */
function handleTens(number) {
    var output = '';
    var quotient = number / 10;
    if (quotient < 2) {
        output += exports.smallNumbers[number];
    } else {
        output += exports.specialTens[Math.floor(number / 10) - 2];
        if (number % 10 !== 0)
            output += '-' + exports.smallNumbers[number % 10];
    }
    return output;
}

exports.handleTens = handleTens;

/**
 * The function handleHundreds() reads the number passed as an argument and returns the corresponding string.
 * @param number
 * @returns {string}
 */
function handleHundreds(number) {
    var output = '';
    var leadingDigit = Math.floor(number / 100);
    output += (number > 100 ? exports.smallNumbers[leadingDigit] + ' ' : '') + exports.largeNumbers[0];
    number = number % 100;
    if (number > 0)
        output += ' and' + handleSmallNumber(number);
    return output;
}

exports.handleHundreds = handleHundreds;

/**
 * The function handleSmallNumber() reads the number passed as an argument and returns the corresponding string.
 * @param number
 * @returns {string}
 */
function handleSmallNumber(number) {
    if (number === 0)
        return '';
    var output = ' ';
    if (number < 10)
        output += exports.smallNumbers[number];
    else if (number < 100)
        output += handleTens(number);
    else if (number < 1000)
        output += handleHundreds(number);
    return output;
}

exports.handleSmallNumber = handleSmallNumber;

/**
 * The function numberToWords() reads the number passed as an argument
 * and returns the corresponding modified string..
 * @param number
 * @returns {string}
 */
function numberToWords(number) {
    number = Math.floor(number);
    if (number === 0)
        return exports.smallNumbers[number];
    var output = '';
    var chunks = groupInChunksOfThree(number);
    for (var i = chunks.length - 1; i >= 0; i--) {
        var num = chunks[i];
        output += handleSmallNumber(num);
        if (i > 0) {
            var nextIndex = i - 1;
            var nextNumber = chunks[nextIndex];
            if (num > 0)
                output += ' ' + exports.largeNumbers[i];
            if (nextNumber > 0) {
                if (nextIndex === 0)
                    output += (nextNumber < 100) ? ' and' : ',';
                else if (nextIndex >= 1)
                    output += ',';
            }
        }
    }
    return (output + '.').trim();
}

exports.numberToWords = numberToWords;

/***
 * The function capitalizeFirstLetter() capitalizes
 * the first letter of the string passed as an argument
 * and returns the modified string.
 * @param string
 * @returns {string}
 */
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

exports.capitalizeFirstLetter = capitalizeFirstLetter;

/**
 * The function sayNumber() reads the number passed as an argument and
 * returns the corresponding string with the first letter capitalized.
 * @param number
 * @returns {string}
 */
function sayNumber(number) {
    try {
        if (isInValidRange(number) && isPositive(number)) {
            return capitalizeFirstLetter(numberToWords(number));
        }
    } catch (err) {
        console.error(err);
    }
}

exports["default"] = sayNumber;
