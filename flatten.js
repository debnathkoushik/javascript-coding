/**
 Implement a function that recursively flattens an array to single level deep.
 */
export default function flatten(value) {

    let value = value;

    // keep on checking whether 'value' cointains any array or not
    // if true, keep on spreading and concating the elements to a new array
    // and assigning it to 'value'
    while (value.some(Array.isArray)) {

      value = [].concat(...value);

    }
  
    return value;
}