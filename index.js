// function justInvoke(fn) {
//   return fn();
// }
const justInvoke = fn => fn();

// function setThisWithCall(fn, thisValue, arg) {
//   return fn.call(thisValue, arg)
// }

const setThisWithCall = (fn, thisValue, arg) => fn.call(thisValue, arg);

// function setThisWithApply(fn, thisValue, arg) {
//   return fn.apply(thisValue, arg);
// }

const setThisWithApply = (fn, thisValue, arg) => fn.apply(thisValue, arg);

// function returnNewFunctionOf(functionToBeCopied, thisValue) {
//   return functionToBeCopied.bind(thisValue)
// }
const returnNewFunctionOf = (fnToBeCopied, thisValue, arg) =>
  fnToBeCopied.bind(thisValue);
