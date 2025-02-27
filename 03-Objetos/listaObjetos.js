const cliente = {
    nome:"Thomaz",
    idade: 34,
    email: "thomazlucca@gmail.com",
    telefone: ["31912345678", "31987654321"],
};

cliente.enderecos = [
    {
        rua: "Avenida JK",
        numero: 99,
        apartamento: true,
        complemento: "ap 121",
    },
];

cliente.enderecos.push({
    rua: "Avenida 26",
    numero: 32,
    apartamento: false,
    complemento: "casa",
});

//console.log(cliente.enderecos);

const listaApenasApartamentos = cliente.enderecos.filter((endereco) => endereco.apartamento === true);

console.log(listaApenasApartamentos);