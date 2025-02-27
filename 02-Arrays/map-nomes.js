const nomes = ["ana Julia", "Caio vinicius", "Bia silva"];

const nomesPadronizados = nomes.map((nome) => {
    return nome.toUpperCase();
})

console.log(nomesPadronizados);


const nomesPadronizados2 = nomes.map((nome) => nome.toLowerCase())

console.log(nomesPadronizados2);