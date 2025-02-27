const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;


for (let element of notas) {
    somaDasNotas += element;    
}

console.log(somaDasNotas);


console.log(`A média é: ${somaDasNotas/notas.length}`);