// function User(nome, email) {
//     this.nome = nome
//     this.email = email

//     this.exibitInfos = function() {
//         return `${this.nome}, ${this.email}`
//     }
// }

// // const novoUser = new User('Thomaz', 't@t.com')
// // console.log(novoUser.exibitInfos())

// function Admin(role) {
//     User.call(this, 'Thomaz', 't@t.com')
//     this.role = role || 'estudante'
// }

// Admin.prototype = Object.create(User.prototype) //cria um objeto com o prototipo de User
// const novoUser = new Admin('admin') //criando um novo objeto Admin, passando somente o role. as outras informações vieram de User
// console.log(novoUser.exibitInfos())
// console.log(novoUser.role)

const user = {
    init: function(nome, email) {
        this.nome = nome
        this.email = email
    },

    exibirInfos: function() {
        return this.nome
    }
}

const novoUser = Object.create(user)
novoUser.init('Thomaz', 't@t.com')
console.log(novoUser.exibirInfos())
// console.log(user.isPrototypeOf(novoUser))