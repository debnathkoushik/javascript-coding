/**
Implement a function to construct a table of contents from an HTML document.
 */

function stringify(node) {
  function stringifyChildren(children) {
    return children.length > 0
      ? `<ul>${children.map(stringifyNode).join("")}</ul>`
      : ``;
  }

  function stringifyNode(node) {
    return `<li>${node.text}${stringifyChildren(node.children)}</li>`;
  }

  return stringifyChildren(node.children);
}

const headingTags = new Set(["h1", "h2", "h3", "h4", "h5", "h6"]);

export default function tableOfContents(doc) {
  const rootNode = {
    text: null,
    children: [],
  };
  const stack = [rootNode];

  // stores the level (hierarchy) of the last element which is pushed into the stack
  let previousLevel = 0;

  function traverse(element) {
    if (element === null || element.tagName === null) {
      return;
    }

    if (headingTags.has(element.tagName.toLowerCase())) {
      const node = {
        text: element.textContent,
        children: [],
      };

      // stores the level (hierarchy) of the current element
      const currentLevel = parseInt(element.tagName[1], 10);

      for (let i = currentLevel; i < previousLevel + 1; i++) {
        stack.pop();
      }

      stack[stack.length - 1].children.push(node);
      stack.push(node);
      previousLevel = currentLevel;
    }

    for (const eachChild of element.children) {
      traverse(eachChild);
    }
  }
  traverse(doc.body);

  return stringify(stack[0]);
}
