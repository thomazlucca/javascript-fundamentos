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

for (let chave in cliente){
    let tipo = typeof cliente[chave];
    if (tipo !== 'object' && tipo !== 'function'){
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}.`);
    }
}