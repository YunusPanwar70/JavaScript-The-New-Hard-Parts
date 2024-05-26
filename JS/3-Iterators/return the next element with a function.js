function parent(arr) {
    let i = 0;
    function inner() {
        const element = arr[i]
        i++;
        return element
    }
    return inner
}
const nextElement = parent([1, 2, 3]);
console.log(nextElement());
console.log(nextElement());
console.log(nextElement());

// First we declare a function parent and a placeholder arr the we call a function parent([1,2,3]) and pass him the argument and it will make new exexution context in exexution first it will store arr then he got i and then a function then we return the inner function and that entire fucntion will store in nextElement now we call the nextElement() and it will make new execution context inside the exeution he will se the element with the lexical environment then he will increment i then stored it into return statemntt because updated value goes to the return statemnt then we return element and then our output will log.