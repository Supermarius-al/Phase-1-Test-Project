let table = document.querySelector("#workout-routine")
let sets = document.getElementById('sets')


document.addEventListener("DOMContentLoaded", () => {
const selectBtn = document.querySelector("#workout-select")
selectBtn.addEventListener('click', (e) =>{
e.preventDefault()
let workoutSelect = document.querySelector('input[type="radio"]:checked').value
console.log(workoutSelect)
selection(workoutSelect)
})
})
function selection(workoutSelect, x){
    if (workoutSelect == "upperBody") {renderUpperBody(), x = 1}
    else if(workoutSelect == "lowerBody"){
        renderLowerBody(), x = 0}}

async function renderUpperBody(){
 let data = await fetch("http://localhost:3000/workoutTypes")
    .then(resp => resp.json())
    .then(data =>  data)
const upperBody = data[1]
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
const lowerBody = data[0]
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
         <td class="padding">
         <form class="update-form" id="${[i]}"> 
         <input type="text" name="weight${[i]}" id="weight${[i]}" placeholder="LBs" value>
         <input type="submit" value="Update">
         </form>
        </td>`

    table.appendChild(tr)
  }

let updateBtns = document.getElementsByClassName("update-form")


 for(let i = 0; i < x.length; i++)
  updateBtns[i].addEventListener('submit', (e) => {
    e.preventDefault()
    
      let input = document.querySelector(`input#weight${[i]}`)
    console.log(input.value)
    let formData = new FormData(e.target)
    let formObj = Object.fromEntries(formData)
    console.log(formObj)
  patchRequest(formObj, x)
  
})}


/// the json itse;f is messed up


function patchRequest(updateObj, x){
    e.preventDefault()
 fetch(`http://localhost:3000/workoutTypes/${x}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
                },
        body: JSON.stringify(updateObj)
            }
            ).then(res => res.json())
        .then(data => console.log(data))}
        