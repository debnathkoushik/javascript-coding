/**
Implement a function that conditionally joins CSS class names together.
 */

export default function classNames(...args) {
  const classNamesList = [];

  args.forEach((eachElement) => {
    const typeOfEachElement = typeof eachElement;

    //remove falsey values
    if (!eachElement) {
      return;
    }

    if (typeOfEachElement === "string" || typeOfEachElement === "number") {
      classNamesList.push(eachElement);
      return;
    }

    if (Array.isArray(eachElement)) {
      classNamesList.push(classNames(...eachElement));
      return;
    }

    if (typeOfEachElement === "object") {
      for (const key in eachElement) {
        if (Object.hasOwn(eachElement, key) && eachElement[key]) {
          classNamesList.push(key);
        }
      }
      return;
    }
  });

  return classNamesList.join(" ");
}
