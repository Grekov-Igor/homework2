// кажется тут должен быть код...

// Подсказка №1: Содержимое тега textarea хранится в его свойстве value

// Подсказка №2: Не забывайте, что LocalStorage и SessionStorage могут хранить только строки в виде пар ключ/значение


let num = 0
if (localStorage.getItem('num') !== 'null') {
    num = Number(localStorage.getItem('num'))
}

if (num !== 0) {
    for (let i=1; i<=num; i++) {
        let p = document.createElement('p')
        p.innerText = localStorage.getItem(String(i))
        document.querySelector('.news__brief').after(p)
    }
}

function addComment() {
    if (document.querySelector("textarea").value !== "") {
        let p = document.createElement('p')
        let comment = document.querySelector("textarea").value
        p.innerText = comment
        document.querySelector('.news__brief').after(p)
        document.querySelector("textarea").value = ""

        num+=1
        localStorage.setItem(String(num), comment)
        localStorage.setItem('num', String(num))
    }
}

const button = document.querySelector("button")
button.addEventListener('click', addComment)