/**
Implement a jQuery-like function that sets the style of a DOM element.
 */

export default function $(selector) {
  const element = document.querySelector(selector);

  return {
    css: function (prop, value) {
      //GET value
      if (value === undefined) {
        if (element !== null) {
          const value = element.style[prop];
          return value === "" ? undefined : value;
        }

        return undefined;
      }

      //SET value
      if (element !== null) {
        element.style[prop] = value;
      }

      return this;
    },
  };
}
