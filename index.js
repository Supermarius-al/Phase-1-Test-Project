let table = document.querySelector("#workout-routine")
let sets = document.getElementById('sets')
const selectBtn = document.getElementById('workout-select')


document.addEventListener("DOMContentLoaded", () => {
selectBtn.addEventListener('click', (e) =>{


let workoutSelect = document.querySelector('input[type="radio"]:checked').value

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
         <td class="padding"><form id='weightForm'>
         <input type="text" name="weight"/>
         <input type="submit" value="Update"/>
       </form>
        </td>`

    table.append(tr)
   
  }
  let tableData = document.querySelectorAll('.tData')
let updateBtns = document.getElementsByClassName("update-form")

}


/// add


//function patchRequest(updateObj, x)
//    e.preventDefault()
// fetch(`http://localhost:3000/workoutTypes/${x}`, {
  //      method: "PATCH",
  //      headers: {
  //          'Content-Type': 'application/json',
  //          'Accept': 'application/json'
  //              },
  //      body: JSON.stringify(updateObj)
  //          }
  //          )
  //      .then(res => res.json())
 //       .then(data => console.log(data))}
