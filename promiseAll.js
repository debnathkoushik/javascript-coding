/**
 Implement the Promise.all() function that resolves to an array of results if all the input elements are resolved or rejects otherwise.
 */
export default function promiseAll(iterable) {
  
    // an array to store the values of the successful promises
    let valueArray = new Array (iterable.length);
  
    // counter to check whether there is any pending promises
    let totalPromises = iterable.length;
    
    return new Promise ( (resolve, reject) => {
  
      // check if the array 'iterable' is empty
      // if 'true' call resolve with the array 'value'
      if (totalPromises === 0){
        resolve(valueArray);
      }
  
      // else loop till all the promises are 'resolved'
      iterable.forEach( (eachPromise, index) => {
        Promise.resolve(eachPromise).then(

           // if 'fulfilled' then
          (value) => {
  
            // store the value
            valueArray[index] = value;
  
            // decrement the counter
            totalPromises -= 1;
  
            // check if all the promises are resolved
            if (totalPromises === 0){
              resolve(valueArray);
            }
          }, 

          // if 'rejected' then
          (reason) => {
  
            // call reject with the 'reason'
            reject(reason);
          }
        )
      })
    })
}
  