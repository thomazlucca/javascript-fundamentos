const notas = [10, 6, 8, 5.5, 10];

notas.pop();

console.log(notas);

let somaNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
}

console.log("A média é: " + somaNotas / notas.length);