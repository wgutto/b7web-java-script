
let cores = ['vermelho', 'azul', 'preto', 'rosa']

for(let i = 0; i < cores.length; i++) {
    console.log(cores[i])
}

for(let a in cores) {
    console.log(cores[a])
}

for(let cor of cores) {
    console.log(cor)
}

let numero = 5

for(let i = 1; i <= 10; i++) {
    console.log(`${numero} X ${i} é ${numero * i}`)
}