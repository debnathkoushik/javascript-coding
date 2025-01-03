/**
Implement a function to get all DOM elements that match a tag.
 */

export default function getElementsByTagName(el, tagName) {
  let elements = [];
  let tagNameParam = tagName.toUpperCase();

  function traverse(element) {
    if (element == null) {
      return;
    }

    if (element.tagName == tagNameParam) {
      elements.push(element);
    }

    for (const child of element.children) {
      traverse(child);
    }
  }

  for (const child of el.children) {
    traverse(child);
  }

  return elements;
}
