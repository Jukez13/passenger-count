
let Elcount=document.getElementById("count")
let saveEl = document.getElementById("save-el")

let cnt=0
function increment() {
    cnt=cnt+1
    Elcount.innerText=cnt
}



function save(){

    let countStr = cnt + " - "
    saveEl.textContent += countStr
    Elcount.textContent=0
    cnt=0
}