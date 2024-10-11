/**
 Implement a function to limit how many times a function can be executed by delaying the execution of the function until after a specified time after its last execution attempt.
 */

export default function debounce(func, wait) {

    // initialise a variable to store the timeout ID returned by setTimeout()
    let timeoutID = null;
  
    return function (...args){
  
      let context = this;
      
      // if any new call comes, stop the execution of the previous
      clearTimeout(timeoutID);
  
      timeoutID = setTimeout(function(){
        timeoutID = null;
        func.call(context, ...args);
      }, wait);
      
    }
    throw 'Not implemented!';
}
  