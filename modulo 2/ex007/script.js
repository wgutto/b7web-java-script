let carros = ['BMW', 'Ferrari', 'Mercedes']

let x = carros[1]

console.log(x)

carros[1] = 'Audi'

console.log('2. Lista com Audi')
console.log(carros)

carros.push('Volvo')

console.log('3. Lista com Volvo')
console.log(carros)

console.log(`Quantidade de carros: ${carros.length}`)