/**
 Implement a function to safely access deeply-nested properties in JavaScript objects
 */

export default function lodashGet(objectParam, pathParam, defaultValue) {

    // check if pathParam is a an array
    // if not, convert pathParam to an array
    const pathArray = Array.isArray(pathParam) ? pathParam : String(pathParam).split(".");
    
    let index = 0;
  
    // check if data exists in the provided path
    while (objectParam != null && index < pathArray.length){
      objectParam = objectParam[pathArray[index]];
      index++;
    }
  
    // check if the provided path i.e. pathParam is traversed
    // if not, return undefined
    const returnedValue = index == pathArray.length ? objectParam : undefined;

    // if the value provided after traversing pathParam is 'undefined'
    // then, return the defaultValue
    return returnedValue !== undefined ? returnedValue : defaultValue;
  
    throw 'Not implemented!';
}