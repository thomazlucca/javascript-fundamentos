const clientes = require("./clientes.json");

function filtrarApartamentoSemComplemento(clientes){
    return clientes.filter((lista) => {
        return (lista.endereco.apartamento && !lista.endereco.hasOwnProperty("complemento"));
    });
}

const filtrados = filtrarApartamentoSemComplemento(clientes);

console.log(filtrados);