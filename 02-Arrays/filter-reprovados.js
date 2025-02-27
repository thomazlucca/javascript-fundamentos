const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

//filter retorna booleano
//                                utilizar _ quando não for utilizar o parametro (convenção)
const reprovados = alunos.filter((_, indice) => {
    return medias[indice] < 7;

})

console.log(reprovados);