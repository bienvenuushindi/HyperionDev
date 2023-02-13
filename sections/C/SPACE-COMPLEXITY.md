# SPACE COMPLEXITY OF MY SOLUTION

> The space complexity represents the amount of memory used by a program to execute.
> We can say that space complexity is the combination or sum up of the auxiliary space
> and the space used by input values.
> - #### Space Complexity = Auxiliary Space + Space used for input values

## Evaluation of the  Space Complexity

Fist of all, We need to know the amount of memory used by different types of datatype variables,
program instructions, constant values and few other things like function call,
recursion stack(in recursion case) in order to calculate the space complexity.

| datatype | size(bytes) |
|:---------|:------------|
| char     | 2           |
| number   | 8           |
| string   | n * char    |

- We all know that a string is just a set of characters then its size depends on the number of characters it contains

Now we can evaluate the space complexity of our solution based on the above table.
The entry point of our solution is the `sayNumber()` Function represented below :arrow_down:

  ```
    sayNumber(number: number): string {
     if (isInValidRange(number) && isPositive(number)) 
       return capitalizeFirstLetter(numberToWords(number) + '.');
     }
  ```

Let's assume this function will take S1 amount of space which can be represented as follows:

- S1 = S2+S3+S4+S5
    - where S2 is the amount of space `isInValidRange()`
    - where S3 is the amount of space `isPositive() `
    - where S4 is the amount of space `numberToWords()`
    - where S5 is the auxiliary space for things like function call

- Let's evaluate S2
  ```
  isInValidRange(number: number): boolean {
    const upperLimit: number = 16;
    const numberOfDigits: number = number.toString().length;
    if (numberOfDigits < upperLimit) return true;
    throw new Error('Invalid input. Number should not exceed 999,999,999,999,999');
  }
  ```   
    1. upperlimit variable stores a constant value, and it will take "8 bytes" of space.
    2. numberOfDigits variable stores the number of digits in an integer value, and it will take "8 bytes" of space

  Hence, S2= 2 * 8 bytes = 16 bytes.
- Let's evaluate S3
  ```
  isPositive(number: number): boolean {
    if (number >= 0) return true;
    throw new Error('Invalid input. Number should be greater or equal to 0');
  }
  ```   
    1. number is an integer variable which stores the value we need to verify no matter what value will, it will just
       take "8 bytes" of space.
       Hence, S3 = 4 bytes
- Let's evaluate S4

   ```
   numberToWords(number: number): string {
      number = Math.floor(number);
      if (number === 0) return smallNumbers[number];
      let output: string = '';
      const chunks: number[] = groupInChunksOfThree(number); // return an array of integer
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
      return (output).trim();
  }
   ```
    1. number is an integer variable which stores the value we pass to the function. It will just
       take "8 bytes" of space.
    2. output is a string variable which stores the result. This value is dynamic and its size depends on the input
       Assuming that N is the number of words to write a specif number we can conclude that the size of output is (N*2)
       bytes
    3. chunk is an array of integer whose size depends on the input, therefore its size is (N * 8) bytes
    4. i, num, nextIndex, nextNumber will also individually require 8 bytes each as of integer type, so the 4 combined will require 32 bytes of space.

So, Total space complexity = S2+S3+S4+S5 = (16) + (4) + (8+ N * 2 + N * 8 + 32) + 20 We assume that all the auxiliary space combined is 20.
As we can see this sapce increases linearly as the value of n increases 

#### We can then conclude that the space complexity of this solution is O(n). This is also known as linear

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!