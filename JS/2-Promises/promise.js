function display(data) {
    console.log(data);
}
const fetchData = fetch('https://jsonplaceholder.typicode.com/users')
                                // Domain name starts here   | path.
fetchData.then(display);


// The fetch() will divided into two parts 1. our response(object) 2. web browser the fetch() is not the js feature it's a web browser feature browser will request to network for this data the network first will go to the domain name and after that will go to the path and will get our data after that return that data to browser and browser will insert that data into our variable fetchData after that the .then() method insert our data into an array and give it to our function display and withtin the display function out data will go to the placeholder(parameter) and it will log our value.

// Promise.all()
// Promise.allSettled()
// Promise.any()
// Promise.race()
// Promise.finally()
// for await of
// two facade function