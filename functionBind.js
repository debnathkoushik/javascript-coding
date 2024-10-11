/**
 Implement the Function.prototype.bind() method that creates a new function with the 'this' keyword set to a provided value.
 */

Function.prototype.myBind = function (thisArg, ...argArray) {

    // access the function with which myBind is attached
    let originalFunction = this;
  
    // return the copy of the function along with the arguments passed
    return function(...args){
      return originalFunction.call(thisArg, ...argArray, ...args);
    }
    throw 'Not implemented!';
  };