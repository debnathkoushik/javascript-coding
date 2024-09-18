/**
 Implement a function to control the execution of a function by limiting how many times it can execute over time.
 */
export default function throttle(func, wait) {


    let shouldThrottle = false;
     
     return function (...args){
  
      // if func() is already called during the wait time
      // no more call can be made
      if (shouldThrottle){
          return;
      }
      
      // when set to true
      // restricts calls made during the wait time
      shouldThrottle = true;
  
      // will asign true to 'shouldThrottle' after the wait time is over
      // so that call can be made
      setTimeout(function(){
        shouldThrottle = false;
      }, wait);
  
      func.call(this, ...args);
  
     }
    throw 'Not implemented!';
  }