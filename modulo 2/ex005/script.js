function calcular(m, q) {
    let m2 = 3000
    let preco = 0


    if(q == 1) {
        preco = m * m2
    } else if (q == 2) {
        preco = m * (m2 * 1.)
    } else if (q >= 3) {
        preco = m * (m2 * 1.5)
    }

return preco

}


let metragem = 123
let quartos = 3
let preco = calcular(metragem, quartos)
console.log(preco)