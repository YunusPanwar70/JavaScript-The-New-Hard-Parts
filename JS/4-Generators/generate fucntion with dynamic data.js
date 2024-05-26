function* genrator() {
    yield 4;
    yield 5;
    yield 6;
}
const returnNextElement = genrator();
const elem1 = returnNextElement.next();
const elem2 = returnNextElement.next();
const elem3 = returnNextElement.next();
console.log(elem1);
console.log(elem2);
console.log(elem3);

// First we declare a generator amd then we call a Generator() but but but it wil not make the execution context it will return special generator object with next property which has function. then ww call a returnNextElement and inside of that we use .next() function and it's assosiated with the Generator() so he will make execution context of Generator() in the exexution he will yeild (it's pwwerfull keywrd which is generate the value 4 and as well as it will hold the execution) after that he will assigned the 4 value to the returnNextElemnet() and then he assign to the elem1.
