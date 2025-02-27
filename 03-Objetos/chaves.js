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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro; É necessário ter um endereço cadastrado.")
}