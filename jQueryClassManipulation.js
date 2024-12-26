/**
Implement a set of jQuery-like functions that manipulates classes on a DOM element.
 */

function classNamesToSet(classNames) {
  return new Set(classNames.trim().split(/\s+/));
}

export default function $(selector) {
  const element = document.querySelector(selector);

  return {
    toggleClass: function (className, state) {
      if (element == null) {
        return this;
      }

      const classNames = classNamesToSet(className);
      const elementClassNames = classNamesToSet(element.className);

      classNames.forEach((eachClassName) => {
        const shouldRemoveClass =
          state == undefined ? elementClassNames.has(eachClassName) : !state;
        shouldRemoveClass
          ? elementClassNames.delete(eachClassName)
          : elementClassNames.add(eachClassName);
      });

      // convert to array before assigning
      element.className = Array.from(elementClassNames).join(" ");

      return this;
    },

    addClass: function (className) {
      return this.toggleClass(className, true);
    },

    removeClass: function (className) {
      return this.toggleClass(className, false);
    },
  };
}
