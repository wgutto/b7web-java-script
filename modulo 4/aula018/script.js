function createPerson(nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade,
        nomeCompleto() {
            return `${nome} ${sobrenome}`
        }
    }
}

let peessoa = createPerson('Augusto', 'Brito', 22)

console.log(peessoa.nomeCompleto())