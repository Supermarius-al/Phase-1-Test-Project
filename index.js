let table = document.getElementById("workout-routine")
let sets = document.getElementById('sets')
document.addEventListener("DOMContentLoaded", () => {
const submitBtn = document.querySelector("#workout-submit")
renderMaintain()

const form = document.getElementById("workout_select")
submitBtn.addEventListener('click', (e) =>{
e.preventDefault()
let workoutSelect = document.querySelector('input[type="radio"]:checked').value
})
})

async function renderMaintain(){
 let data = await fetch("http://localhost:3000/workoutTypes")
    .then(resp => resp.json())
    .then(data =>  data)
let maintainObj = data[2]
let { exercises } = maintainObj
exercises.flat()
let { dayOne, dayTwo, dayThree } = exercises[0]
console.log(dayOne)

let sets = Object.values(dayOne)
let exercise = Object.keys(dayOne)
exercise.forEach(x => createTable(x))
sets.forEach(set => createTable(set))

// let { exercises } = data

}


function createTable(x, y){
   let td = document.createElement('tr')
    td.innerHTML = `<td>${x}</td><td>${y}</td>`
    table.appendChild(td)
    
}
