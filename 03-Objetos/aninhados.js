const cliente = {
    nome:"Thomaz",
    idade: 34,
    email: "thomazlucca@gmail.com",
    telefone: ["31912345678", "31987654321"],
};

cliente.endereco = {
    rua: "Avenida JK",
    numero: 99,
    apartamento: true,
    complemento: "ap 121",
}

console.log(cliente);
console.log(cliente.endereco);
console.log(cliente.endereco["rua"]);