# JS Intermediate Resources

### ES6 Import & Export

In JavaScript, the import and export keywords are used to include code from one JavaScript file (or module) into another, and to export variables, functions, or objects from a JavaScript file so that they can be used in other parts of your code. This enables modular programming, which is a key feature of modern JavaScript development.

In the example, the food.js file exports the someVariable and someFunction variables, which are then imported and used in the index.js file. This allows you to write reusable code and organize your project into logical modules.
---

### Map() & Filter()

In JavaScript, the map() and filter() methods are array methods that allow you to manipulate arrays in a functional style.

The map() method creates a new array by calling a provided function on every element in the calling array.

The filter() method, on the other hand, creates a new array with all elements that pass the test (truthy or falsey) implemented by the provided function.
---

### Spread Syntax

In JavaScript, the spread syntax allows an iterable (such as an array or string) to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

The spread syntax can also be used in function calls to expand an array of arguments.

In example, the '...numbers' syntax expands the numbers array and inserts its elements as arguments to the sum() function. This is equivalent to calling sum(1, 2, 3) without using the spread syntax.

You can also add new values to an object or array by using a comma and adding a value via spread syntax `const sampleObject = {...blog, blogVar: 1} `

Overall, the spread syntax is a convenient way to expand arrays and objects in JavaScript, allowing you to avoid using the Array.prototype.concat() method or writing complex destructuring patterns.