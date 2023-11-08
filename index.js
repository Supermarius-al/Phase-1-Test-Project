let table = document.getElementById("workout-routine")
let sets = document.getElementById('sets')
document.addEventListener("DOMContentLoaded", () => {
const submitBtn = document.querySelector("#workout-submit")
renderUpperBody()

const form = document.getElementById("workout_select")
submitBtn.addEventListener('click', (e) =>{
e.preventDefault()
let workoutSelect = document.querySelector('input[type="radio"]:checked').value
})
})

async function renderUpperBody(){
 let data = await fetch("http://localhost:3000/workoutTypes")
    .then(resp => resp.json())
    .then(data =>  data)
let { exercises } = data[1]
console.log(exercises)


let sets = Object.values(exercises)
let exercise = Object.keys(exercises)
console.log(sets)

console.log(exercise)
createTable(exercise, sets)

//let x = exercise.forEach(x => createTable(x))
//let y = sets.forEach(set => createTable(set))
//createTable(x, y)
// let { exercises } = data

}


function createTable(x, y){
   
   for(let i = 0; i < x.length; i++ ) {
    console.log(x)
    let tr = document.createElement('tr')
    tr.innerHTML = `<td><ul><li> ${x[i]} </li></td><td> ${y[i]} </td>`
    table.append(tr)
  }
   

    
}
