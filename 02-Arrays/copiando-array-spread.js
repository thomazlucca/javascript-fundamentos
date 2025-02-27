const notas = [7, 7, 8, 9];

//operador de espalhamento, spread operator
const novasNotas = [5,...notas,10];

//ou usa push ou usa após a declaração acima
//novasNotas.push(10);

console.log(`As novas notas são: ${novasNotas}`);
console.log(`As notas originais são: ${notas}`);