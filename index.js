
let name;
let nameForm = document.getElementById('name-form');
document.addEventListener('DOMContentLoaded', () => {
nameForm.addEventListener('submit', e => {e.preventDefault();

})})

function fetchName(){
    fetch(`https://api.nationalize.io/?name=${name}`)
    .then(resp => resp.json())
    .then(nameInfo => nameInfo.forEach())
};