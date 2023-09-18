function scale() {
    const el = document.querySelector('.i')
    el.style.transform = 'scale(0.75)'

    setTimeout(() => {
        el.style.transform = 'scale(1)';
    }, 100)
}

let count = 0;
let pl = document.getElementById('plus')
let min = document.getElementById('minus')
let disp = document.getElementById('display')

pl.addEventListener('click', () => {
    count++
    disp.innerHTML = count
})

min.addEventListener('click', () => {
    count--
    disp.innerHTML = count
})
