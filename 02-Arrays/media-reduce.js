const salaJs = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notaDaSala) {
    const somaDasNotas = notaDaSala.reduce((acc, nota) => {
        return acc + nota;
    }, 0)

    const media = somaDasNotas / notaDaSala.length;
    return media;
}


console.log(`A média da sala é: ${calculaMedia(salaJs)}`);
console.log(`A média da sala é: ${calculaMedia(salaJava)}`);
console.log(`A média da sala é: ${calculaMedia(salaPython)}`);





const numeros = [43, 50, 65, 12];

const soma = numeros.reduce((acc, atual) => acc + atual, 0);

console.log(soma);