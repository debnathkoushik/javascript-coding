/**
 Implement a function to control the execution of a function by limiting how many times it can execute over time.
 */
export default function throttle(func, wait) {

    // initialise a 'shouldThrottle' variable to control the execution
    let shouldThrottle = false;
     
     return function (...args){
      
      // check no call goes through until the wait time is over
      if (shouldThrottle){
          return;
      }
  
      // set 'shouldThrottle' to true to make sure
      // the next invocation of the callback function (func) only occurs
      // after the 'wait' is over
      shouldThrottle = true;
  
      // set 'shouldThrottle' to false
      // so that the callback function (func) can be invoked after the 'wait' time is over
      setTimeout(function(){
        shouldThrottle = false;
      }, wait);
  
      func.call(this, ...args);
  
     }
    throw 'Not implemented!';
}