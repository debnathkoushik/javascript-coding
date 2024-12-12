/**
 Implement a function that performs deep copy of a value.
 */
export default function deepClone(value) {
  if (value === null || typeof value !== "object") {
    return value;
  } else if (Array.isArray(value)) {
    return value.map((eachElement) => {
      return deepClone(eachElement);
    });
  }

  return Object.fromEntries(
    Object.entries(value).map(([key, eachValue]) => {
      return [key, deepClone(eachValue)];
    })
  );
}
