let tel = '1234123412341234'

let lastDigitals = tel.slice(-4)

// Adiciona a quantidade total de letras que vai ter a string (primeiro parâmetro), e o que vai substituir caso não for passado o números de letras especificado (segundo parãmetro)
console.log(lastDigitals.padStart(16, '*'))