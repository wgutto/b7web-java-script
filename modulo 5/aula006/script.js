document.getElementById('button').addEventListener('click', clicou)

function clicou() {
    fetch('https://jsonplaceholder.typicode.com/posts').then( (response) => {
        return response.json()
    }).then( (data) => {
        alert(data[0].title)
    })
}