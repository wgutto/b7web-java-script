let lista = [99, 66, 454, 2]
let lista2 = []

// Roda o array e procura o item da condição
lista2 = lista.find( (item) => {
    return (item == 66) ? true : false
})

let res = lista2

console.log(res)

// Roda o array e procura a posição do item da condição
lista2 = lista.findIndex( (item) => {
    return (item == 2) ? true : false
})

let res2 = lista2

console.log(res2)



let usuarios = [
    {
        nome: 'Augusto',
        idade: 20,
        sexo: 'M'
    },
    {
        nome: 'Evelly',
        idade: 20,
        sexo: 'F'
    }
]

let filter = usuarios.findIndex( (item) => {
    return (item.nome == 'Evelly') ? true : false
})

let resultado = filter

console.log(filter)