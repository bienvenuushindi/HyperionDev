import {
  isPositive,
  isInValidRange,
  groupInChunksOfThree,
  handleTens,
  handleHundreds,
  handleSmallNumber, numberToWords, capitalizeFirstLetter
} from '../index';

describe('function ', () => {
  describe('isPositive()', () => {
    const negativeNumber: number = -2;
    it('should throw an error when number is negative', () => {
      expect(() => isPositive(negativeNumber)).toThrow(new Error('Invalid input. Number should be greater or equal to 0'));
    });

    it('should return  true when number is positive', () => {
      expect(isPositive((negativeNumber * -1))).toBeTruthy();
    });
  });

  describe('isInValidRange()', () => {
    const input: number = 999999999999999000;
    it('should throw an error when input exceed accepted value', () => {
      expect(() => isInValidRange(input)).toThrow(new Error('Invalid input. Number should not exceed 999,999,999,999,999'));
    });
    it('should return true when input is in valid range', () => {
      expect(isInValidRange(1)).toBeTruthy();
    });
  });

  describe('groupInChunksOfThree()', () => {
    it('should return an array of length 3 when input is 2,345,409', () => {
      expect(groupInChunksOfThree(2345409).length).toBe(3);
    });

    it('should return an array of length 1 when input is 100', () => {
      expect(groupInChunksOfThree(100).length).toBe(1);
    });

    it('should return an array of length 4 when input is 1,000,000,000', () => {
      expect(groupInChunksOfThree(1000000000).length).toBe(4);
    });
  });

  describe('handleTens()', () => {
    it('should return "ten" when input is 10', () => {
      expect(handleTens(10)).toBe('ten');
    });

    it('should return "twenty-one" when input is 21', () => {
      expect(handleTens(21)).toBe('twenty-one');
    });

    it('should return "zero" when input is 0', () => {
      expect(handleTens(0)).toBe('zero');
    });
  });

  describe('handleHundreds()', () => {
    it('should return "hundred" when input is 100', () => {
      expect(handleHundreds(100)).toBe('hundred');
    });

    it('should return "one hundred and twenty-one" when input is 121', () => {
      expect(handleHundreds(121)).toBe('one hundred and twenty-one');
    });
  });

  describe('handleSmallNumber()', () => {

    it('should return "ten" when input is 10', () => {
      expect(handleSmallNumber(10).trim()).toBe('ten');
    });


    it('should return "twenty-one" when input is 21', () => {
      expect(handleSmallNumber(21).trim()).toBe('twenty-one');
    });

    it('should return "hundred" when input is 100', () => {
      expect(handleSmallNumber(100).trim()).toBe('hundred');
    });

    it('should return "one hundred" and twenty-one when input is 121', () => {
      expect(handleSmallNumber(121).trim()).toBe('one hundred and twenty-one');
    });
  });
  describe('numberToWords()', function () {
    it('should return "one million." when input is 1,000,000', function () {
      expect(numberToWords(1000000)).toBe('one million.');
    });
    it('should return "one hundred and twenty-one." when input is 121', () => {
      expect(numberToWords(121).trim()).toBe('one hundred and twenty-one.');
    });
    it('should return "ninety trillion, three hundred and seventy six billion, ten thousand and twelve." when input is 90376000010012', () => {
      expect(numberToWords(90376000010012).trim()).toBe('ninety trillion, three hundred and seventy-six billion, ten thousand and twelve.');
    });
  });

  describe('capitalizeFirstLetter()', function () {
    it('should return "Hello" when input is hello', () => {
      expect(capitalizeFirstLetter('hello')).toBe('Hello')
    })
  })
});

