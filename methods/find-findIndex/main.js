const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(numbers);
function multipleOf13(element, index, array) {
  return (element % 13 === 0);
}
// find devolve o primeiro valor do array que satisfaça a condição proposta
const findMultipleOf13 = numbers.find(multipleOf13);
console.log('findMultipleOf13', findMultipleOf13);

// findIndex devolve o índice do primeiro valor que satisfaça a condição proposta
const findIndexMultipleOf13 = numbers.findIndex(multipleOf13);
console.log('findIndexMultipleOf13', findIndexMultipleOf13);