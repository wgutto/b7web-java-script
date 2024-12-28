let lista = [2, 50, 29, 70, 53]
let lista2 = []


// Filtra quais os itens são maiores que a condição
lista2 = lista.filter( (item) => {
    if(item > 20) {
        return true
    }
})
let res = lista2

console.log(res)

// Roda a lista e vê se TODOS os itens obdecem a condição
lista2 = lista.every( (item) => {
    if(item > 20) {
        return true
    } else {
        return false
    }
})
let res2 = lista2

console.log(res2)