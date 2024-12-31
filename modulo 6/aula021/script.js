// Recebe o valor passado pelo usuario, independente de quantos itens, sem precisar passar todos os parâmetros
function adicionar(nomes, ...novosNomes) {
    let nomesCompletos = [...nomes, ...novosNomes]
    console.log(nomesCompletos)
}

let nomes = ['Augusto', 'Brito']
let novosNomes = adicionar(nomes, 'Evelly', 'Dias')