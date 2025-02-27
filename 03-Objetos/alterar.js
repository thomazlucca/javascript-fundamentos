const pessoa = {
    nome: "Thomaz",
    profissao: "Engenheiro",
};

console.log(pessoa.nome);

console.log(pessoa.telefone);

pessoa.telefone = "31912345678";

console.log(pessoa.telefone);

pessoa.nome = "Thomaz Moreira";

console.log(pessoa);

const novaPessoa = {
    nome: "Gabi",
}
//só não pode reatribuir, mas pode alterar o conteúdo interno
//pessoa = novaPessoa;