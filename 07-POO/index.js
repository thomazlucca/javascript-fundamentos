import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

// const novoUser = new User('Thomaz', 't@t.com', '2021-01-01')
// console.log(novoUser.exibirInfos())

const novoAdmin = new Admin ('Rodrigo', 'R@R.com', '2021-01-01')
console.log(novoAdmin.exibirInfos())

// console.log(novoAdmin.nome)
// novoAdmin.nome = 'Rodrigo'
// console.log(novoAdmin.nome)


const novoDocente = new Docente('Guilherme', 'g@g.com', '2021-01-01')
console.log(novoDocente.exibirInfos())