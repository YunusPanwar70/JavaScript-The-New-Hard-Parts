function display(data) {
    console.log(data);
};
function displayHello() {
    console.log('Hello');
};
function blockFor300Ms() {
    console.log('Block for 1 sec');
};
setTimeout(displayHello, 0);
blockFor300Ms();
const futureData = fetch('../1-Asynchronous JavaScript/Asynchronous javaScript.js');
futureData.then(display);
console.log('Me First');



// First we defined a display function and displayHello and then blockFor300Ms then we run a web api setTimeout() and passed the function displayHello and run that after 0 Ms. first it will go the web api and he will immediately go the callBack queue and the event loop will check first the call stack is empty and all executions are completed but in this case the call stack is not empty because the previous fuctions (display,displaHello etc.) are running so the value of our setTimeout will wait in call back queue untill the call stack is empty.

// Next line we call blockFor300Ms() and it will make new execution context and he will go to the call stack and he will run and our return values is ("Block for 1 sec") then we run an another web api (setTimeout,fetch etc they will also web browser api's) and we alredy saw the work of fetch.

// Next line we used .then it will take our data and will go the response object and fill our data on Value property (there are two properties in our response object 1. Value 2. onFullFillMent) then after push the data on Value property the onFullFillMent will autometically triggered and push our object into an array. then he will assign our final result to the display function and data will go to the placeholder(parameter) of our display function and then our data wlll be log.

// Next line after that our console will log. ('Me First');