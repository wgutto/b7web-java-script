class Person {

    anos = 0

    constructor(name) {
        this.name = name
    }
}

function criarPessoa(name, anos) {
    let p = new Person(name)
    p.anos = anos
    return p
}

let pessoa = criarPessoa('José', 20)

console.log(pessoa.name)