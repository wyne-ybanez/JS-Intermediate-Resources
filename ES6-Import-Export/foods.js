const foods = ["cake", "chocolate", "cheese", "cookies"];

const formatFood = () => {
  let val = "";
  foods.forEach((food) => (val += food + ", "));
};

const yummy = () => {
  console.log(foods[0] + " is delicious");
};

// Export so you can import them somewhere else
export { foods, formatFood, yummy };

export default foods