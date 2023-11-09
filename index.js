let table = document.getElementById("workout-routine")
let sets = document.getElementById('sets')
document.addEventListener("DOMContentLoaded", () => {
const selectBtn = document.querySelector("#workout-select")


const form = document.getElementById("workout_select")
selectBtn.addEventListener('click', (e) =>{
e.preventDefault()

let workoutSelect = document.querySelector('input[type="radio"]:checked').value
console.log(workoutSelect)
selection(workoutSelect)

})
})
function selection(x){
    if(x == "upperBody") {renderUpperBody()}
    else if(x == "lowerBody"){
        renderLowerBody()}
    }

async function renderUpperBody(){
 let data = await fetch("http://localhost:3000/workoutTypes")
    .then(resp => resp.json())
    .then(data =>  data)
let { exercises, tracking } = data[1]
let wgtAmts = Object.values(tracking)

let sets = Object.values(exercises)
let exercise = Object.keys(exercises)
createTable(exercise, sets, wgtAmts)
}
async function renderLowerBody(){
    let data = await fetch("http://localhost:3000/workoutTypes")
       .then(resp => resp.json())
       .then(data =>  data)
       data = data.flat() 
   let { exercises, tracking } = data[0]
   let wgtAmts = Object.values(tracking)
   
   let sets = Object.values(exercises)
   let exercise = Object.keys(exercises)
   createTable(exercise, sets, wgtAmts)
   }



function createTable(x, y, z){
let tData = document.querySelectorAll(".tData")

   for(let i = 0; i < x.length; i++ ) {
    let tr = document.createElement('tr')
    tr.setAttribute("class", "tData")
    tr.innerHTML = ``
    tr.innerHTML = 
    `<td class="padding">${x[i]}</td>
    <td class="padding">${y[i]}</td>
    <td class="padding">${z[i]}</td>
    <input type="text" name="name" placeholder="LBs" value="" />
    <td class="padding"><button>Edit</button></td>`
    table.append(tr)
  }  
}
document.querySelector("#workout-routine > tr:nth-child(1) > td:nth-child(1)")
