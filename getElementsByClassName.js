/**
Implement a function to get all DOM elements that contain the specified classes.
 */

export default function getElementsByClassName(element, classNames) {
  const classNamesSet = new Set(classNames.trim().split(/\s+/));
  const elements = [];

  const traverse = (element) => {
    if (element === null) {
      return;
    }

    if (classNamesExists(element.classList, classNamesSet)) {
      elements.push(element);
    }

    for (const eachChild of element.children) {
      traverse(eachChild);
    }
  };

  for (const eachChild of element.children) {
    traverse(eachChild);
  }

  return elements;
}

const classNamesExists = (classList, classNamesSet) => {
  return Array.from(classNamesSet).every((eachClassName) =>
    classList.contains(eachClassName)
  );
};
