let table = document.querySelector("#workout-routine")
let sets = document.getElementById('sets')


document.addEventListener("DOMContentLoaded", () => {
const selectBtn = document.querySelector("#workout-select")


selectBtn.addEventListener('click', (e) =>{
e.preventDefault()
let workoutSelect = document.querySelector('input[type="radio"]:checked').value
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
const upperBodyWorkout = data[1]
let { upperBody } = upperBodyWorkout
let { exercises, tracking } = upperBody
let wgtAmts = Object.values(tracking)
let sets = Object.values(exercises)
let exercise = Object.keys(exercises)
createTable(exercise, sets, wgtAmts)
}



async function renderLowerBody(){
    let data = await fetch("http://localhost:3000/workoutTypes")
       .then(resp => resp.json())
       .then(data =>  data)
const lowerBodyWorkout = data[0]
let { lowerBody } = lowerBodyWorkout
let { exercises, tracking } = lowerBody
let wgtAmts = Object.values(tracking)
let sets = Object.values(exercises)
let exercise = Object.keys(exercises)
createTable(exercise, sets, wgtAmts)
   }



function createTable(x, y, z){

table.replaceChildren()
   for(let i = 0; i < x.length; i++ ) {
    let tr = document.createElement('tr')
    tr.setAttribute("class", "tData")
    tr.innerHTML = 
    `<td class="padding">${x[i]}</td>
    <td class="padding">${y[i]}</td>
    <td class="padding">${z[i]}</td>
    <form id="update-form>
        <td class="padding">
            <input type="text" name="weights" placeholder="LBs" value>
            <input type="submit" value="Update">
        </td>
    </form>`
    table.appendChild(tr)
  }  
}

function updateLbs(){
     fetch("http://localhost:3000/workoutTypes", {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
                },
        body: JSON.stringify({
            lift: 0
        })})
        }
    
        