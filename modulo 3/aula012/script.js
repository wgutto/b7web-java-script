var inputcampo = document.getElementById('campo')
var lista = []
var campolista = document.getElementById('lista')

inputcampo.addEventListener('keyup', adicionar)

function adicionar(e) {
    if(e.code == 'Enter') {
        if(inputcampo.value == '') {
            alert('[ERRO] Digite algo primeiro.')
        } else {
            let newLi = document.createElement('li')
            lista.push(inputcampo.value)
            newLi.innerHTML = lista
            campolista.appendChild(newLi)

            console.log(lista)
        }
        inputcampo.value = ''
        inputcampo.focus()
    }
}
