// Iterator is an object which is provide us values sequence wise. let's say =>
const number = [1, 2, 3];
for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
}

// here is an example if we need values one by one we can use this but it's little bit worst method we can use instead of this Iterators;

const arr = [1, 2, 3];
const Iterator = arr[Symbol.iterator]();
console.log(Iterator.next().value) // -> 1
console.log(Iterator.next().value) // -> 2
console.log(Iterator.next().value) // -> 3

//It will make a bundle of arr and save it in a specific location it will also give us values sequence wise. first he got arr. after that we made arr to iterator when we execute Iteraotr.next().value it will check what value he gave us before and he gave us 1 so that he will give us the next value 2;

// Let's see a seprate example

function createNewfunc() {
    function add2(num) {
        return 2 + num
    }
    return add2
}
const newfunc = createNewfunc();
const result = newfunc(3);
console.log(result);

// First we declare a createNewFunc and isnide of them we create another function add2 and then we resolve our placeholder(parameter) by + 2 and then return add2 then we execute createNewFunc() a store it in a newFunc indentefier and it will make a new execution context and then inside the execution context our add2 function will added and then he will sea a retrun statement with resolve num then we return add2 and he will stored in a newFunc after that our execution context will destoryed because our execution context work has complete and then we call a newFunc(3) it will make new execution context and it will find in his own execution context is there any placeholder to store that argumnet yep. then he will sum them and store them to constant identifier result and we will log it.