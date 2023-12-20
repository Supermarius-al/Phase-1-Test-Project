let table = document.querySelector("#workout-routine")
let sets = document.getElementById('sets')
const selectBtn = document.getElementById('workout-select')


document.addEventListener("DOMContentLoaded", () => {
selectBtn.addEventListener('click', (e) =>{


let workoutSelect = document.querySelector('input[type="radio"]:checked').value
table.innerHTML = ``
selection(workoutSelect)
e.preventDefault()
})})

function workoutButton(e){
    selectBtn.value
}



async function selection(workoutSelect){

    if (workoutSelect == "upperBody") {fetchUpperBody()}
    if(workoutSelect == "lowerBody"){
        fetchLowerBody()}}

async function fetchUpperBody(){
  await fetch("http://localhost:3000/workoutTypes")
    .then(resp => resp.json())
    .then(upperBodyArr =>  upperBodyArr.forEach(renderUpperBody))
}


async function fetchLowerBody(){
  await fetch("http://localhost:3000/workoutTypes")
  .then(resp => resp.json())
  .then(lowerBodyArr =>  lowerBodyArr.forEach(renderLowerBody))
}

async function renderUpperBody(exerciseObj){
  if(exerciseObj.category == 'upperBody'){
   createTable(exerciseObj)}
}

async function renderLowerBody(exerciseObj){{
  if(exerciseObj.category == 'lowerBody'){
   createTable(exerciseObj)}}
}






async function createTable(exerciseObj){
    
       {
            let tr = document.createElement('tr')
            tr.setAttribute("class", "tData")
             tr.innerHTML = 
         `<td class="padding">${exerciseObj.exercise}</td>
         <td class="padding">${exerciseObj.reps}</td>
         <td class="padding">${exerciseObj.weight}</td>
         <td class="padding">
         <form id='${exerciseObj.id}'>
         <input type="text" id="weight"/>
         <input type="submit" value="Update"/>
       </form>
        </td>`

    table.append(tr)
   
  }

let weight = document.getElementById(`${exerciseObj.id}`)
weight.addEventListener('submit', (e) => {
e.preventDefault()
let weightUpdate = document.getElementById('weight')
exerciseObj.weight = weightUpdate.value
updateAmount(exerciseObj)
selection(workoutSelect)
})


}


async function updateAmount(exerciseObj){
  await fetch(`http://localhost:3000/workoutTypes/${exerciseObj.id}`,{
       method: 'PATCH',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify({
           "weight": exerciseObj.weight})
         })
   .then(resp => resp.json())
  .then(exerciseObj => console.log(exerciseObj))}


  document.querySelector("#\\36  > input[type=submit]:nth-child(2)")