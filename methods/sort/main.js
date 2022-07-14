//ORDENANDO ELEMENTOS
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log('numbers', numbers);

// método para reverter a ordem de um Array
const numberReversed = numbers.reverse();
console.log('numberReversed', numberReversed);

// sort sem a função de comparação
const numberSortedWithoutFnCompare = numbers.sort();
console.log('numberSortedWithoutFnCompare', numberSortedWithoutFnCompare);

// sort com a função de comparação
function compare(a, b) {
  if(a < b) return -1; // devolve um número negativo se b for maior que a;
  if(a > b) return 1; // devolve um número positivo se a for maior que b;
  return 0; // nesse caso a deve ser igual a b
}
const numberSortedWithFnCompare = numbers.sort(compare);
console.log('numberSortedWithCompare', numberSortedWithFnCompare);

// a function acima pode ser escrita assim:
const numberSorted = numbers.sort((a, b) => a - b); // ordena o mesmo resultado.
console.log('numberSorted', numberSorted);

// ORDENANDO OBJETOS
const friends = [
  {name: 'John', age: 30},
  {name: 'Ana', age: 25},
  {name: 'Maria', age: 35},
  {name: 'Joseph', age: 55},
]

function comparePerson(a, b) {
  if(a.age < b.age) return -1;
  if(a.age > b.age) return 1;
  return 0;
}
const friendSorted = friends.sort(comparePerson);
console.log('friendSorted', friendSorted)

// ORDENANDO STRINGS
const names = ['John', 'Ana', 'ana', 'john']

function compareName(a, b) {
  if(a.toLowerCase() < b.toLowerCase()) return -1;
  if(a.toLowerCase() > b.toLowerCase()) return 1;
  return 0;
}
const nameSorted = names.sort(compareName)
console.log('nameSorted', nameSorted)
// A  compare function retorna 3 resultados:
// se for 0 nada muda no Array;
// se for -1 o Array retorna em order crescente A, B, C... <-> ..Z | 0, 1, 2... <-> ...100
// se for 1 o Array retorna em order decrescente Z... <-> ...C, B, A | 100... <-> ...2, 1, 0