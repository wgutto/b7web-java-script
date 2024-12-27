document.getElementById('button').addEventListener('click', clicou)
document.getElementById('inserir').addEventListener('click', inserir)

/* function clicou() {
    fetch('https://jsonplaceholder.typicode.com/posts').then( (response) => {
        return response.json()
    }).then( (data) => {
        alert(data[0].title)
    })
} */

async function clicou() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json()

    console.log(json[0])

    alert('clicou')
}

async function inserir() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Titulo',
            body: 'Corpo',
            userId: 2
        })
    })
    let json = await response.json()

    console.log(json)
    
}