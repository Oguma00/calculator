const buttons = document.querySelectorAll(".btn")
const screen = document.querySelector(".screen")
const input = document.querySelector(".input")
const output = document.querySelector(".output")
const clear = document.querySelector(".del")
const equals = document.querySelector(".equal")
const clears = document.querySelector(".clear")

let calc=[]
let calculation ;

buttons.forEach(buttons => buttons.addEventListener("click", function(){

    calc.push(buttons.textContent)
    calculation = calc.join("")
    console.log(calculation)
    input.textContent=calculation
}))

clear.addEventListener("click", function(){
    calc = []
     input.textContent = ""
     output.textContent = ""
})
clear1.addEventListener("click", function(){
    calc = []
     input.textContent = ""
     output.textContent = ""
})


equals.addEventListener("click",function(){
    let answer = eval(calculation)
    output.textContent = answer
})

