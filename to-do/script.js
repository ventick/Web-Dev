var input = document.getElementById("todoinput")
var addButton = document.getElementById("goAddIt")
var list = document.getElementById("myList")


addButton.addEventListener('click', function(){
    if(input.value === "")return

    var newLi = document.createElement("li")
    var doneButton = document.createElement("button")
    var removeButton = document.createElement("button")

    newLi.textContent = input.value
    doneButton.textContent = "done"
    removeButton.textContent = "remove"

    doneButton.addEventListener('click', function(){          
        newLi.classList.toggle("completed")
    })
    removeButton.addEventListener('click', function(){
        newLi.remove()
    })

    newLi.append(doneButton, removeButton)
    list.appendChild(newLi)


    input.value = ""
})