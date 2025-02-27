const cliente = {
    nome:"Thomaz",
    idade: 34,
    cpf: "12345678910",
    email: "thomazlucca@gmail.com",
};

console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos`);


const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
});