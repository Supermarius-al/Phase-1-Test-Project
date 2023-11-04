document.addEventListener("DOMContentLoaded", () => {
const submitBtn = document.querySelector("#workout-submit")

const form = document.getElementById("workout_select")
submitBtn.addEventListener('click', (e) =>{
e.preventDefault()
let workoutSelect = document.querySelector('input[type="radio"]:checked').value
})
})

function renderMaintain(){
    fetch("http://localhost:3000/workoutTypes")
    .then(resp => resp.json())
    .then(data => console.log(data))
}
