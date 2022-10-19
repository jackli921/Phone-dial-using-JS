let callEl = document.getElementById("callEl")
let saveNumber = document.getElementById("savedEl")
let stored = ""


function one() {
    saveNumber = "1"
    callEl.textContent += saveNumber
    stored += saveNumber    
}

function two() {
    saveNumber = "2"
    callEl.textContent += saveNumber
    stored += saveNumber    
}
function three() {
    saveNumber = "3"
    callEl.textContent += saveNumber
}
function four() {
    saveNumber = "4"
    callEl.textContent += saveNumber
       stored += saveNumber    
}
function five() {
    saveNumber = "5"
    callEl.textContent += saveNumber
       stored += saveNumber    
}
function six() {
    saveNumber = "6"
    callEl.textContent += saveNumber
       stored += saveNumber    
}
function seven() {
    saveNumber = "7"
    callEl.textContent += saveNumber
       stored += saveNumber    
}
function eight() {
    saveNumber = "8"
    callEl.textContent += saveNumber
       stored += saveNumber    
}
function nine() {
    saveNumber = "9"
    callEl.textContent += saveNumber
       stored += saveNumber    
}
function asterisk() {
    saveNumber = "*"
    callEl.textContent += saveNumber
       stored += saveNumber    
}
function zero() {
    saveNumber = "0"
    callEl.textContent += saveNumber
       stored += saveNumber    
}
function number() {
    saveNumber = "#"
    callEl.textContent += saveNumber
       stored += saveNumber    
}

function save() {  
    savedNumber.textContent += stored + " "
    callEl.textContent = "Calling: "
    stored =""
}

function reset() {
    callEl.textContent = "Calling: "

}

function dial () {
    callEl.textContent = "Sorry, working on it!"

}