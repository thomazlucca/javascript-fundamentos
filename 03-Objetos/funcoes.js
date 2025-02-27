const cliente = {
    nome:"Thomaz",
    idade: 34,
    email: "thomazlucca@gmail.com",
    telefone: ["31912345678", "31987654321"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente!")
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado! Novo saldo ${this.saldo}`);
        }
    }
};

cliente.efetuaPagamento(50);

