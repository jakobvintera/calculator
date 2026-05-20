# Calculator
A browser-based calculator and my fourth project built for The Odin Project foundations course.

## Features
- Basic arithmetic: addition, subtraction, multiplication, division
- Single number operations: square root, x², x³, π
- Chained operations: evaluates previous result before applying the next operator
- Prevents evaluation on consecutive operator presses
- Starting a new digit after a result clears the display automatically
- Division by zero returns an error message
- Decimal input with duplicate prevention
- Decimal rounding and scientific notation for overflow prevention
- Interactive history panel tracking last 9 results
- Delete and Clear buttons for input correction
- Error state locks calculator until cleared

## What I Practiced
- Managing complex application across multiple variables (firstNumber, secondNumber, storedOperator, result, errorState)
- Event-driven programming and distinguishing between different button groups
- Debugging with console.log to trace variable state through a call chain
- DOM manipulation: reading and updating textContent, traversing with previousElementSibling, dynamic visibility changes


## Future Improvements
- Keyboard support
- Copy to display on history panel click
- Prefix button edge case when operator is displayed
- x2 and x3 not working in some cases
