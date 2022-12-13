// place async key word before the function
const gettodo = async () => {
    /*
    EXPLANATION:
    - fetch, returns a promise
    - await, adds the object data onto the var once the promise has been fulfilled
    */
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data = await response.json()

    console.log(response)
    console.log(data)
}

// invoke your variable
gettodo()