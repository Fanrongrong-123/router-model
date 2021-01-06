let number = window.location.hash.substr(1)

number = number || 1

const div = document.querySelector(`#div${number}`)

const app = document.querySelector("#app")

div.style.display = "block";

app.appendChild(div)

window.addEventListener('hashchange', () => {
    let number = window.location.hash.substr(1)

    number = number || 1

    const div = document.querySelector(`#div${number}`)
    const app = document.querySelector("#app")
    div.style.display = "block";

    app.children[0].style.display = "none"
    document.body.appendChild(app.children[0])

    app.appendChild(div)
})