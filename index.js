const justInvoke = function (fn) {
  return fn();
};

const setThisWithCall = function (fn, thisValue, arg) {
  return fn.call(thisValue, arg);
};

const setThisWithApply = function (fn, thisValue, args) {
  return fn.apply(thisValue, args);
};

const returnNewFunctionOf = function (functionToBeCopied, thisValue) {
  const copied = functionToBeCopied.bind(thisValue);
  return copied;
};
