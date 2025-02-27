const notas = [10, 6.5, 8, 7.5];

somaDasNotas = 0;

notas.forEach(function (nota, index) {
    somaDasNotas += nota;
    console.log(index);
});

console.log(somaDasNotas);
console.log(`A média é: ${somaDasNotas/notas.length}`);