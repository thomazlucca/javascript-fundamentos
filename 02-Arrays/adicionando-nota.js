const notas = [10, 6, 8];

notas.push(7);

let somaNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
}

console.log(somaNotas / notas.length);