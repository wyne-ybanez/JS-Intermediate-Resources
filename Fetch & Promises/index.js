// returns a Promise
const todo = fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(res => console.log(res))

//this happens before the Promise response
console.log(todo);

// cleaner version
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json()) // returns an object
  .then((json) => console.log(json)); // output data in the form of JSON
