let pessoa = {
    nome: 'José',
    sobrenome: 'Augusto',
    idade: 22,
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    }
}

console.log(pessoa.nomeCompleto())