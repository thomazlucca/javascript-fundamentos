const cliente = {
    nome:"Thomaz",
    idade: 34,
    cpf: "12345678910",
    email: "thomazlucca@gmail.com",
};

console.log(`O nome do cliente é ${cliente.nome} e essa pessoa tem ${cliente.idade} anos`);
console.log(`Os três primeiros dígitos do CPF são ${cliente.cpf.substring(0,3)}.`);