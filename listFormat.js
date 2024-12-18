/**
Implement a function that formats a list of items into a single readable string.
 */

const AND_SEPARATOR = " and ";
const OTHER_LABEL = " other";
const COMMA_SEPARATOR = ", ";

export default function listFormat(itemsParam, options = {}) {
  //filter falsey values
  const itemList = itemsParam.filter((eachItem) => !!eachItem);

  if (itemList.length == 0) {
    return "";
  }

  if (itemList.length == 1) {
    return itemList[0];
  }

  if (options.sorted) {
    itemList.sort();
  }

  if (options.unique) {
    itemList = Array.from(new Set(itemList));
  }

  if (
    options.length &&
    options.length > 0 &&
    itemList.length > options.length
  ) {
    const firstSection = itemList
      .slice(0, options.length)
      .join(COMMA_SEPARATOR);

    const remainingCount = itemList.length - options.length;

    const secondSection =
      AND_SEPARATOR +
      `${remainingCount + OTHER_LABEL + (remainingCount > 1 ? "s" : "")}`;

    return firstSection + secondSection;
  }

  const firstSection = itemList
    .slice(0, itemList.length - 1)
    .join(COMMA_SEPARATOR);

  const secondSection = AND_SEPARATOR + itemList[itemList.length - 1];

  return firstSection + secondSection;
}
