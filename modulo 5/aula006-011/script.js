document.getElementById('button').addEventListener('click', clicou)
document.getElementById('inserir').addEventListener('click', inserir)

/* function clicou() {
    fetch('https://jsonplaceholder.typicode.com/posts').then( (response) => {
        return response.json()
    }).then( (data) => {
        alert(data[0].title)
    })
} */

function clicou() {
    let req = fetch('https://jsonplaceholder.typicode.com/posts')

    req.then( (response) => {
        console.log(`status: ${response.status}`)
        return response.json()
    }).then( (json) => {
        console.log(json[0].title)
    }).catch( (error) => {
        console.log(error)
    }).finally( () => {
        console.log('finalizado')
    })
}

function inserir() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: 'Titulo',
            body: 'Corpo',
            userId: 2
        })
    }).then( (response) => {
        return response.json()
    }).then( (json) => {
        console.log(json)
    })
}