let lista = ['cachorro', 'gato', 1, 'urso', 'vaca']

let adiconar = 'peixe'

// Busca em um array/string se existe aquilo que foi passado, retornando true ou false
if(lista.includes(adiconar) == true) {
    console.log('existe')
} else {
    lista.push(adiconar)
    console.log(lista)
}

//  Repete o item pelo número de vez que foi passado na função
console.log( 'x'.repeat(20))