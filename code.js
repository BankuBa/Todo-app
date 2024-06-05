let inputBox = document.getElementById("input-box")

let add = document.querySelector(".row button")


 
let listContainer = document.getElementById("list-container")


function addTask() {
  if (inputBox.value === "") {
    alert("You Must Add A Task")
  }
  else {
    let li = document.createElement("li")
    li.innerHTML = inputBox.value
    listContainer.appendChild(li)
    let span = document.createElement("span")

    span.innerHTML = '<img src="images/trash.svg">';
    li.appendChild(span)


    
  }
  inputBox.value = "";
}

document.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
  e.target.classList.toggle("checked")
  }
  else if(e.target.tagName === "SPAN IMG") {
    e.target.parentElement.remoive()
  }
  
}, false)