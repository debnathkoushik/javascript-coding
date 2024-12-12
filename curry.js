/**
 Implement a function that transforms a function that takes multiple arguments into a function that can be repeatedly called with only one argument at a time.
 */

export default function curry(func) {
  return function curried(...args) {
    // func.length is used to calculate the arity of func
    if (args.length >= func.length) {
      return func.call(this, ...args);
    }

    return (arg) =>
      arg === undefined
        ? curried.call(this, ...args)
        : curried.call(this, ...args, arg);
  };
}
