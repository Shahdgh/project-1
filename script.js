
const button = document.querySelector(".btn-btn")
const input = document.querySelector("input")
const list = document.querySelector(".list")

button.addEventListener("click", function () {
    const text = input.value

    const item = document.createElement("li")
    item.innerHTML = text

    item.addEventListener("click", function () {
        item.style.color = "white"
        item.style.textDecoration = "line-through"
    })

    list.append(item)

    input.value = ""
})

///////////////////////////////////


