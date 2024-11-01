/**
 Implement the Promise.any() function that resolves when any of the input elements are resolved.
 */
export default function promiseAny(iterable) {

    // retrun a new promise
    return new Promise( (resolve, reject) => {
  
      // if iterable is empty
      // call 'reject' with a new AggregateError which contains an empty array
      if ( iterable.length === 0){
        reject( new AggregateError([]) )
      }
  
      // counter for calculating total number of promises
      let pendingPromises = iterable.length;
  
      // array for storing all the errors
      // which will be passed to 'AggregateError' for calling 'reject'
      // if all the Promises gets 'rejected'
      let errors = new Array(iterable.length);
  
      iterable.forEach( async (eachPromise, index) => {
        try {
          const response = await eachPromise;
          resolve(response);
        }
        catch (error) {
          errors[index] = error;
  
          // decrement the counter
          pendingPromises--;
        }
  
      // when no promises are available
      if (pendingPromises === 0){
        reject( new AggregateError(errors) );
      }
  
      })
  
    });
    throw 'Not implemented!';
  }