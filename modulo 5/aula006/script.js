document.getElementById('button').addEventListener('click', clicou)

/* function clicou() {
    fetch('https://jsonplaceholder.typicode.com/posts').then( (response) => {
        return response.json()
    }).then( (data) => {
        alert(data[0].title)
    })
} */

function clicou() {
    let req = fetch('https://jsonplaceholder.typicode.cm/posts')

    req.then( (response) => {
        console.log(`status: ${response.status}`)
        return response.json()
    }).then( (json) => {
        return console.log(json[0].title)
    }).catch( (error) => {
        console.log(error)
    }).finally( () => {
        console.log('finalizado')
    })
}