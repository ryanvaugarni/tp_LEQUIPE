document.addEventListener("DOMContentLoaded",()=>{
let btn = document.querySelector(".btn")
let hide1 = document.querySelector(".hide1")
let hide2 = document.querySelector(".hide2")
let hide3 = document.querySelector(".hide3")
let hrhide1 = document.querySelector(".hr_hide1")
let hrhide2 = document.querySelector(".hr_hide2")
let hrhide3 = document.querySelector(".hr_hide3")
let button = document.querySelector("button")
let hrhide0 = document.querySelector(".hr_hide0")

/*déploiement des autres articles*/
btn.addEventListener("click",(e)=>{
    button.classList.toggle("moins")
    hide1.classList.toggle("app1")
    hide2.classList.toggle("app1")
    hide3.classList.toggle("app1")
    hrhide1.classList.toggle("hr_app")
    hrhide2.classList.toggle("hr_app")
    hrhide3.classList.toggle("hr_app")
})

})
