const livros = require("./listaLivros");
const menorValor = require("./menorValor");


for (let atual = 0; atual < livros.length; atual++) {
    let menor = menorValor(livros, atual);

    let livroAtual = livros[atual];
    console.log("indice atual:" + atual);
    console.log("indice do menor:" + menor);

    console.log(livros[atual]);
    let livroMenorPreço = livros[menor];
    console.log(livros[menor]);
    livros[atual] = livroMenorPreço;
    livros[menor] = livroAtual;
}

console.log(livros);