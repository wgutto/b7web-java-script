function soltou(e) {
    console.log(e.code);
}

const input = document.querySelector('input')

input.addEventListener('keyup', soltou)
