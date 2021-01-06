const { all } = require("q")

//router history
console.log('hi')
const div1 = document.createElement('div')
div1.innerHTML = '1'
const div2 = document.createElement('div')
div2.innerHTML = '2'
const div3 = document.createElement('div')
div3.innerHTML = '3'
const div4 = document.createElement('div')
div4.innerHTML = '4'

const routerTable = {
    '/1': div1,
    '/2': div2,
    '/3': div3,
    '/4': div4,
}

function router() {
    let number = window.localStorage.getItem('xxx') //获取xxx的值

    if (!number) {
        number = "/1"
    }

    let div = routerTable[number.toString()]

    if (!div) {
        div = document.querySelector("#div404")
    }
    div.style.display = "block";

    const app = document.querySelector("#app")

    app.innerHTML = ''

    app.appendChild(div)

    const allA = document.querySelectorAll('a.link')

    for (let a of allA) {   //新语法将allA里的每一项作为a
        a.addEventListener('click', (e) => {

            e.preventDefault();

            const href = a.getAttribute('href')//获取href的属性值

            window.localStorage.setItem('xxx', href)    //将href存在xxx里

            //通知重新路由
            onStateChange(href)
        })
    }
}
router()

function onStateChange() {
    router()
}


window.addEventListener('hashchange', () => {
    router()
})