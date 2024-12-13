/**
 Implement a function that determines whether two values are equal.
 */

function checkForType(value) {
  return Object.prototype.toString.call(value);
}

function checkForNonPrimitives(type) {
  return type === "[object Object]" || type === "[object Array]";
}

export default function deepEqual(valueA, valueB) {
  const typeOfValueA = checkForType(valueA);
  const typeOfValueB = checkForType(valueB);

  if (
    typeOfValueA === typeOfValueB &&
    checkForNonPrimitives(typeOfValueA) &&
    checkForNonPrimitives(typeOfValueB)
  ) {
    const valueAToArray = Object.entries(valueA);
    const valueBToArray = Object.entries(valueB);

    if (valueAToArray.length !== valueBToArray.length) {
      return false;
    }

    return valueAToArray.every(
      ([key, value]) =>
        Object.hasOwn(valueB, key) && deepEqual(value, valueB[key])
    );
  }

  return Object.is(valueA, valueB);
}
