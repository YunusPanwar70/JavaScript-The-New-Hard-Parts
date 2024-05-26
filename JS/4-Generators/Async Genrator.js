function doWhenDataRecived(value) {
    return returnNextEle.next(value)
}
function* createFlow2() {
    const data = yield fetch('https://twitter/amk/tweets/1');
    console.log(data);
}
const returnNextEle = createFlow2();
const futureData = returnNextEle.next();
futureData.then(doWhenDataRecived);