async function createFlow() {
    console.log('Me First');
    const data = await fetch('https://jsonplaceholder.typicode.com/users/1')
    console.log(data);
}
createFlow();
console.log('Me Second');

// Async/Await is a feature in javaSript that allow us to do asynchronous programming.
// Async means, we can perform multiple asynchronous taks at a time.
// Await means, he block the further code from await keyword while the global execution context doesn't complete.
// Async/Await or Asynchronous programming is useful in situations where you need to perform long-running tasks we use it for network requests and for read files.