// function justInvoke(fn) {
//   return fn();
// }
const justInvoke = fn => fn();

// function setThisWithCall(fn, thisValue, arg) {
//   return fn.call(thisValue, arg)
// }

const setThisWithCall = (fn, thisValue, arg) => fn.call(thisValue, arg);


