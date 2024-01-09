let table = document.querySelector("#workout-routine")
let sets = document.getElementById('sets')
const selectBtn = document.getElementById('workout-select')


document.addEventListener("DOMContentLoaded", (e) => {e.preventDefault()
selectBtn.addEventListener('click', (e) =>{


let workoutSelect = document.querySelector('input[type="radio"]:checked').value
table.innerHTML = ``
selection(workoutSelect)
e.preventDefault()
})})





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
            tr.setAttribute("id", `row-${exerciseObj.id}`)
             tr.innerHTML = 
         `<td class="padding">${exerciseObj.exercise}</td>
         <td class="padding">${exerciseObj.reps}</td>
         <td class="padding" id="cell-${exerciseObj.id}" >${exerciseObj.weight} pounds</td>
         <td class="padding">
         <form id='form-${exerciseObj.id}'>
         <input type="text" placeholder="pounds" id='${exerciseObj.id}'/>
         <input type="submit" value="Update"/>
       </form>
        </td>`
    table.append(tr)
  }

let weight = document.getElementById(`form-${exerciseObj.id}`)


weight.addEventListener('submit', (e) => {
  console.log(e.target)
  e.preventDefault();
  let weightUpdate = e.target[0].value
  exerciseObj.weight = weightUpdate
  updateAmount(exerciseObj)
  weight.reset()
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
  .then(data => refreshTable(data))}

  

  async function refreshTable(exerciseObj){ 
      document.getElementById(`cell-${exerciseObj.id}`).innerHTML =
      `${exerciseObj.weight} pounds`
}


