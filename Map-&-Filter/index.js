const ninjas = [
  { name: "shaun", belt: "black" },
  { name: "mario", belt: "orange" },
  { name: "yoshi", belt: "black" },
  { name: "luigi", belt: "green" },
];

//===== filter method
const blackBelts = ninjas.filter((ninja) => {
  // return true; // returns the same array
  // return false; // returns a new array which is empty

  return ninja.belt == 'black' // returns an array w data that meets this condition
})

console.log(blackBelts, ninjas) // important to note, the previous array is not changed or replaced


//===== map method
const names = ninjas.map((ninja) => {
    return ninja.name // returns an array of names, map() changes the nature of the items
})

console.log(names, ninjas)