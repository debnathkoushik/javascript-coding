/**
 Implement the Array.prototype.reduce() method
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
  
    // check if initialValue has any value
    const initialValueExists = initialValue !== undefined;
  
    if ( !initialValueExists && this.length === 0){
      throw new TypeError('Reduce of empty array with no initial value');
    }
    
    else {
      const accumulator = initialValueExists ? initialValue : this [0];
      const startingIndex = initialValueExists ? 0 : 1;
  
    for ( let currentIndex = startingIndex; currentIndex < this.length; currentIndex++){
  
        // check for sparse array
        if ( Object.hasOwn(this, currentIndex) ){
          accumulator = callbackFn( accumulator, this[currentIndex], currentIndex, this);
        }
    }
    }
  
    
    return accumulator
};