//let weekDays = document.querySelector('.day')
let weekDays = document.getElementsByClassName('day')
let weekNums = document.getElementsByClassName('num')
let weekEvts = document.getElementsByClassName('evt')

function newEvent (){
    let testo = document.getElementById('myEvent').value
    this.innerHTML = testo
}
// day.addEventListener('mouseover', myFunction)

// function myFunction (){
let day = ["domenica", "lunedì", "martedì", "mercoledì",  "giovedì", "venerdì", "sabato"]
let curr = new Date()

let i = 0
for (let k of weekDays){
    if (i == curr.getDay()) 
        k.style = "font-weight: bold;"
    k.innerHTML = day[i++]
    }

i = 0
for (let k of weekNums){
    if (i == curr.getDay())
        k.innerHTML = curr.getDate()
        i++
    }

for (let k of weekEvts){
    k.addEventListener('click', newEvent)
    }


/*
// }

// let add = document.getElementById('AddEvent')
// add.addEventListener('click', myEvent)

function myEvent(){
    var b = document.createElement("textarea");
};


let del = document.getElementById('DeleteEvent')
del.addEventListener('dblclick', eventReset);

function eventReset(){
    var c = document.createElement("reset")
};
*/