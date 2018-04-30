function justInvoke (callback) {
  return callback();
}

function setThisWithCall (callback, person, argument) {
  return callback.call(person, argument);
}

function setThisWithApply (callback, person, arguments) {
  // debugger;
  return callback.apply(person, arguments);
}

function returnNewFunctionOf (callback, person) {
  return callback.bind(person);
}
