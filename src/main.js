function router() {
    let number = window.location.hash.substr(1)

    number = number || 1

    let div = document.querySelector(`#div${number}`)

    if (!div) {
        div = document.querySelector("#div404")
    }
    div.style.display = "block";

    const app = document.querySelector("#app")

    app.appendChild(div)

}
router()

window.addEventListener('hashchange', () => {
    app.children[0].style.display = "none"
    document.body.appendChild(app.children[0])
    router()
})