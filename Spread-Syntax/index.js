const fruits = ["apple", "banana", "orange"];
const moreFruits = ["mango", "pineapple", ...fruits];

console.log(moreFruits); // Output: ['mango', 'pineapple', 'apple', 'banana', 'orange']


function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6


// Adding new values
const blog = {title: 'new blog', author: 'bowser'}
const idBlog = {...blog, id: 1} 

console.log(idBlog) // Output: {title: 'new blog', author: 'bowser', id: 1}