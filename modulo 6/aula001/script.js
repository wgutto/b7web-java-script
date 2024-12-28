let lista = ['José', 'Augusto', 'Brito']

let adicionar = 'Brito'

console.log(lista.indexOf(adicionar))

if(lista.indexOf(adicionar) > -1) {
    console.log('já existe')
} else {
    lista.push(adicionar)
}

console.log(lista)