const user = {
    nome: "Thomaz",
    email: "tlucca@gmail.com",
    nascimento: "2080/08/05",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Lucca",
    email: "lucca@gmail.com",
    role: "admin",
    criarCurso() {
        console.log('Curso criado')
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso();
admin.exibirInfos();
