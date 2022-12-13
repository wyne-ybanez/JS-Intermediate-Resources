# JS Intermediate Resources

### ES6 Import & Export

In JavaScript, the import and export keywords are used to include code from one JavaScript file (or module) into another, and to export variables, functions, or objects from a JavaScript file so that they can be used in other parts of your code. This enables modular programming, which is a key feature of modern JavaScript development.

In the example, the food.js file exports the someVariable and someFunction variables, which are then imported and used in the index.js file. This allows you to write reusable code and organize your project into logical modules.

---

<h3>Map & Filter</h3>

In JavaScript, the `map()` and `filter()` methods are array methods that allow you to manipulate arrays in a functional style.

The `map()` method creates a new array by calling a provided function on every element in the calling array.

The `filter()` method, on the other hand, creates a new array with all elements that pass the test (truthy or falsey) implemented by the provided function.

---

### Spread Syntax

In JavaScript, the spread syntax allows an iterable (such as an array or string) to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

The spread syntax can also be used in function calls to expand an array of arguments.

In example, the '...numbers' syntax expands the numbers array and inserts its elements as arguments to the sum() function. This is equivalent to calling sum(1, 2, 3) without using the spread syntax.

You can also add new values to an object or array by using a comma and adding a value via spread syntax `const sampleObject = {...blog, blogVar: 1} `

Overall, the spread syntax is a convenient way to expand arrays and objects in JavaScript, allowing you to avoid using the Array.prototype.concat() method or writing complex destructuring patterns.

---

### Fetch & Promises

The global `fetch()` method starts the process of fetching a resource from the network, returning a promise which is fulfilled once the response is available.

The promise resolves to the Response object representing the response to your request.

A `fetch()` promise only rejects when a network error is encountered (which is usually when there's a permissions issue or similar). A `fetch()` promise does not reject on HTTP errors (404, etc.). Instead, a then() handler must check the Response.ok and/or Response.status properties.

---

### Async Await

Async functions can contain zero or more await expressions. Await expressions make promise-returning functions behave as though they're synchronous by suspending execution until the returned promise is fulfilled or rejected. The resolved value of the promise is treated as the return value of the await expression. Use of async and await enables the use of ordinary try / catch blocks around asynchronous code.

Code after each await expression can be thought of as existing in a `.then ` callback. In this way a promise chain is progressively constructed with each reentrant step through the function.