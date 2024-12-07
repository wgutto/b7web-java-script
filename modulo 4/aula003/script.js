class Person {

    _passos = 0

    constructor(nome, sobrenome, ano) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.ano = ano
    }

    darPassos() {
        this.passos++
    }

    get passo() {
        return this._passos
    }
    
    set passo(x) {
        return this._passos = x
    }

    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    }
}

let pessoa1 = new Person('João', 'Porco', 19)
let pessoa2 = new Person('Augusto', 'Brito', 22)
let pessoa3 = new Person('Evelly', 'Brito', 20)


pessoa1.passo = 2


let botaopassos = document.getElementById('passo')
botaopassos.addEventListener('click', () => {
    pessoa1.darPassos()

    console.log(`${pessoa1.nomeCompleto} agora tem ${pessoa1.ano} anos, e deu ${pessoa1.passo} passos.`)
}) 

