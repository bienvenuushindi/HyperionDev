export const smallNumbers: string[] = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
export const specialTens: string[] = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
export const largeNumbers: string[] = ['hundred', 'thousand', 'million', 'billion', 'trillion'];


/**
 * The function isPositive() checks if the number is greater than 0
 * and returns true if it is. Otherwise, it throws an error.
 * @param number
 * @returns {boolean}
 */
export function isPositive(number: number): boolean {
  if (number >= 0) return true;
  throw new Error('Invalid input. Number should be greater or equal to 0');
}

/**
 *  This function checks the length of the number
 *  and returns true if it is less than or equal to 15.
 *  Otherwise, it throws an error.
 * @param number
 * @returns {boolean}
 */
export function isInValidRange(number: number): boolean {
  const upperLimit: number = 16;
  const numberOfDigits: number = number.toString().length;
  if (numberOfDigits < upperLimit) return true;
  throw new Error('Invalid input. Number should not exceed 999,999,999,999,999');

}


// /**
//  * The function isNumber checks if input is a number and return true if it is.
//  * Otherwise, it throws an error
//  * @param number
//  * @returns {boolean}
//  */
// export function isNumber(number: number): boolean {
//   if (typeof number === 'number') return true;
//   throw new Error('Invalid input. Only numbers are allowed');
//
// }

/**
 * The function groupInChunksOfThree() takes a number and
 * splits it into an array of chunks of three characters each.
 *  It then returns the array of chunks.
 * @param number
 * @returns {*[]}
 */

export function groupInChunksOfThree(number: number): number[] {
  const str: string = number.toString();
  const characters = str.split('').reverse();
  const chunks = [];

  for (let i = 0; i < str.length; i += 3) {
    chunks.push(characters.slice(i, i + 3).reverse().join(''));
  }

  return chunks.map(item => parseInt(item));
}

/**
 * The function handleTens() reads the number passed as an argument and returns the corresponding string.
 * @param number
 * @returns {string}
 */
export function handleTens(number: number): string {
  let output: string = '';
  const quotient: number = number / 10;
  if (quotient < 2) {
    output += smallNumbers[number];
  } else {
    output += specialTens[Math.floor(number / 10) - 2];
    if (number % 10 !== 0) output += '-' + smallNumbers[number % 10];
  }
  return output;
}

/**
 * The function handleHundreds() reads the number passed as an argument and returns the corresponding string.
 * @param number
 * @returns {string}
 */
export function handleHundreds(number: number): string {
  let output = '';
  const leadingDigit = Math.floor(number / 100);
  output += (number > 100 ? smallNumbers[leadingDigit] + ' ' : '') + largeNumbers[0];
  number = number % 100;
  if (number > 0) output += ' and' + handleSmallNumber(number);
  return output;
}


/**
 * The function handleSmallNumber() reads the number passed as an argument and returns the corresponding string.
 * @param number
 * @returns {string}
 */
export function handleSmallNumber(number: number): string {
  if (number === 0) return '';
  let output: string = ' ';

  if (number < 10) output += smallNumbers[number];
  else if (number < 100) output += handleTens(number);
  else if (number < 1000) output += handleHundreds(number);

  return output;
}

/**
 * The function numberToWords() reads the number passed as an argument
 * and returns the corresponding modified string..
 * @param number
 * @returns {string}
 */
export function numberToWords(number: number): string {
  number = Math.floor(number);
  if (number === 0) return smallNumbers[number];
  let output: string = '';
  const chunks: number[] = groupInChunksOfThree(number);
  for (let i = chunks.length - 1; i >= 0; i--) {
    let num: number = chunks[i];
    output += handleSmallNumber(num);
    if (i > 0) {
      const nextIndex: number = i - 1;
      const nextNumber: number = chunks[nextIndex];
      if (num > 0) output += ' ' + largeNumbers[i];
      if (nextNumber > 0) {
        if (nextIndex === 0) output += (nextNumber < 100) ? ' and' : ',';
        else if (nextIndex >= 1) output += ',';
      }
    }
  }
  return (output + '.').trim();
}

/***
 * The function capitalizeFirstLetter() capitalizes
 * the first letter of the string passed as an argument
 * and returns the modified string.
 * @param string
 * @returns {string}
 */

export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * The function sayNumber() reads the number passed as an argument and
 * returns the corresponding string with the first letter capitalized.
 * @param number
 * @returns {string}
 */
export default function sayNumber(number: number): string {
  try {
    if (isInValidRange(number) && isPositive(number)) {
      return capitalizeFirstLetter(numberToWords(number));
    }
  } catch (err) {
    console.error(err);
  }
}
