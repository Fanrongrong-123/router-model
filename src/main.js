const div1 = document.createElement('div')
div1.innerHTML = '1'
const div2 = document.createElement('div')
div2.innerHTML = '2'
const div3 = document.createElement('div')
div3.innerHTML = '3'
const div4 = document.createElement('div')
div4.innerHTML = '4'

const routerTable = {
    '1': div1,
    '2': div2,
    '3': div3,
    '4': div4,
}

function router() {
    let number = window.location.hash.substr(1)

    number = number || 1

    let div = routerTable[number.toString()]

    if (!div) {
        div = document.querySelector("#div404")
    }
    div.style.display = "block";

    const app = document.querySelector("#app")

    app.innerHTML = ''

    app.appendChild(div)

}
router()

window.addEventListener('hashchange', () => {
    router()
})