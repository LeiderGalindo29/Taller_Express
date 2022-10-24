
function description() {
const card = document.getElementById("card")
const text = document.getElementById("description")
 
card.addEventListener("click",()=>{
    text.classList.toggle('desc')
});
}
description()

function info() {
    const card = document.getElementById("card-info")
    const text = document.getElementById("hidden-info")
 
card.addEventListener("click",()=>{
    text.classList.toggle('desc')
});
}
info()


function education() {
    const card = document.getElementById("card-edu")
    const container = document.getElementById("i")
 
card.addEventListener("click",()=>{
    container.classList.toggle('desc')
});
}
education()
