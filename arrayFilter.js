/**
 Implement the Array.prototype.filter() method
 */

Array.prototype.myFilter = function (callbackFn, thisArg) {
  let result = [];

  for (let index = 0; index < this.length; index++) {
    const eachValue = this[index];

    if (
      Object.hasOwn(this, index) &&
      callbackFn.call(thisArg, eachValue, index, this)
    ) {
      result.push(eachValue);
    }
  }

  return result;

  throw "Not implemented!";
};
