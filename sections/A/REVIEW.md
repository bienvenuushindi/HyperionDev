Hi Student :wave: , I am @bienvenuushindi your code reviewer

Good job so far!
There are some issues that you still need to work on to complete this milestone perfectly. But you are almost there!

<img src="https://media0.giphy.com/media/cYaB1VycDbOyOiXcCx/giphy.gif"/>

## (Highlights) Good Points: :+1:

May I highlight the following:

- Your project looks good:heavy_check_mark:
- You implemented some requirements good :heavy_check_mark:
- Kudos for using comments to make your code self-documenting :heavy_check_mark:
- In general, you are performing well :heavy_check_mark:

## Aspects to improve

#### Changes Required:

_Every comment with the [REQUIRED] prefix should be considered_

#### Optional suggestions

_Every comment with the [OPTIONAL] prefix is not crucial enough to stop your project from working properly. However, I
strongly recommend you to take them into account as they can make your code better._

1. #### Correctness
   - :red_circle: [REQUIRED] Your solution looks great, unfortunately it is not working because of just one small issue on line 13. The loop body will never
   execute because the loop condition is always evaluated to false. Everything inside the loop is "dead code". Notice
   that you assigned the value of x to num variable on line 12 before the while loop then your loop condition (line 13) is trying
   to verify if x is not equal to num which is false always. 
   Updating the loop conditional expression  `num != x` with `num != 0` will solve the puzzle :fire: :superhero_woman: :superhero:
   
2. #### Syntax errors
    - :red_circle: [REQUIRED] You forgot to close the function `is_palindrome` with using end keyword. Below you can see
      how a method basic structure looks like

    ```
     def function_name(arguments)
          body
     # kindly make sure you add the missing end  to close your function, 
     # Please put it after the last line in your codebase code :hugs:
     end
    ```
    - :red_circle: [REQUIRED] The initialized local variable `reversd` on line 11 is not used. But I do think it is referred to `reversed`
      variable which you are using on lines (17, 22). Kindly rename `reversd` to `reversed` to fix this issue, otherwise
      your program will produce a
      runtime error causing by an uninitialized local variable when trying to run line 17 or 22
        - line 17 `reversed = reversed * 10 + extracted`
        - line 22 ` if reversed != x`

3. #### Style

    - :orange_circle: [OPTIONAL] The names of predicate methods (methods that return a boolean value) should end in a question mark. (
      i.e. Array#empty?)
      Kindly make sure you rename your function  `is_palindrome` on line 2 following the preferred naming
      conventions style for boolean attributes in ruby which states that you should add a question mark ? :question:
      at the end as follows

      | Accepted :heavy_check_mark:   | Not Recommended :heavy_multiplication_x: |
      |:------------------------------|:-----------------------------------------|
      | is_palindrome? or palindrome? | is_palindrome |
      | empty?  or is_empty?          | is_empty     |
      | email_hidden?  or email_is_hidden? | email_is_hidden |

        - Remember the convention is all a matter of code
          readability. [You can read more here](https://stackoverflow.com/questions/37059547/naming-conventions-for-boolean-attributes)

    - :orange_circle: [OPTIONAL]  Please make sure you name your variables in a way that they reveal the intention behind it. This way
      they become searchable and easier to understand after a person sees it.
      Kindly make sure you rename the method parameter `x` in `is_palindrome(x)`(line 2) function. Some names
      like `number`, `input` are more appropriate
    - :orange_circle: [OPTIONAl] To avoid ambiguity on line 17 `reversed = reversed * 10 + extracted` , Kindly Wrap expressions with
      varying precedence with parentheses. After refactoring your code should look similar to
      this `reversed = (reversed * 10) + extracted`

    - :orange_circle: [OPTIONAL] For readability purpose You can re-write the block line 22-26 properly by inverting the negated
      condition and swap the if-else branches as follows:
        - Your code
           ```
               if reversed != x
                  false
               else
                  true
               end
           ```
        - Improved code
          ```
               if reversed == x
                  true
               else
                  false
               end
           ```
        - You can even go further [Cleaner and concise code]
          The above conditional block of code (line 22-26) can simply be replaced with
             ```
                 reversed == x
             ```  

Cheers and Happy coding!👏👏👏

Feel free to leave any questions or comments if something is not 100% clear.
