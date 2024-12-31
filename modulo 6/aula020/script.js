let info = {
    nome: 'Augusto',
    idade: 22
}

let novainfo = {
    ...info, 
    pais: 'Brasil',
    estado: 'CE'
}

console.log(novainfo)

// Junta coisas de um array/obejto, para um só, sem precisar ficar dando push()
function adicionarinfos(infos) {
    let novasInfos = {
        ...infos,
        pais: 'Brasil'
    }
    return novasInfos
}

console.log(adicionarinfos({nome: 'Augusto', idade: 22}))
