/**
Implement a function to determine if two DOM trees are the same.
 */

export default function identicalDOMTrees(nodeA, nodeB) {
  if (nodeA.nodeType !== nodeB.nodeType) {
    return false;
  }

  if (nodeA.nodeType === Node.TEXT_NODE) {
    return nodeA.textContent === nodeB.textContent;
  }

  if (nodeA.tagName !== nodeB.tagName) {
    return false;
  }

  if (nodeA.childNodes.length !== nodeB.childNodes.length) {
    return false;
  }

  if (nodeA.attributes.length !== nodeB.attributes.length) {
    return false;
  }

  const hasSameAttributes = nodeA
    .getAttributeNames()
    .every(
      (eachAttributeName) =>
        nodeA.getAttribute(eachAttributeName) ===
        nodeB.getAttribute(eachAttributeName)
    );

  if (!hasSameAttributes) {
    return false;
  }

  return Array.prototype.every.call(nodeA.childNodes, (childOfNodeA, index) =>
    identicalDOMTrees(childOfNodeA, nodeB.childNodes[index])
  );
}
