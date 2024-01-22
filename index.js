const table = document.querySelector("#workout-routine")
const sets = document.getElementById('sets')
const selectBtn = document.getElementById('workout-select')


document.addEventListener("DOMContentLoaded", (e) => {e.preventDefault()
selectBtn.addEventListener('click', (e) =>{
let workoutSelect = document.querySelector('input[type="radio"]:checked').value
table.innerHTML = ``
fetchData(workoutSelect)
e.preventDefault()
})})
async function fetchData(input){
  let dataArr 
 
 fetch("http://localhost:3000/workoutTypes")
    .then(resp => resp.json())
    .then(data => {dataArr = data 

  const upperBody = dataArr.filter((dataObj => dataObj.category == 'upperBody'))
  const lowerBody = dataArr.filter((dataObj => dataObj.category == 'lowerBody'))
  if (input == "upperBody") {upperBody.forEach(createRow)}
  if(input == "lowerBody"){
    lowerBody.forEach(createRow)}
  })

  }



async function createRow(exerciseObj){
       
            let tr = document.createElement('tr')
            tr.setAttribute("id", `row-${exerciseObj.id}`)
             tr.innerHTML = 
         `<td class="padding">${exerciseObj.exercise}</td>
         <td class="padding">${exerciseObj.reps}</td>
         <td class="padding" id="cell-${exerciseObj.id}" >${exerciseObj.weight} pounds</td>
         <td class="padding">
         <form id='form-${exerciseObj.id}'>
         <input type="text" placeholder="pounds" id='${exerciseObj.id}'/>
         <button type="submit">Update</button>
       </form>
        </td>`
    table.append(tr)

let weight = document.getElementById(`form-${exerciseObj.id}`)


weight.addEventListener('submit', (e) => {
  console.log(e.target[0].value)
  e.preventDefault()
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



