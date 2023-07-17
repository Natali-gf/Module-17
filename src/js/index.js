import { checkValue } from "./function.js";

const button = document.getElementById('button');
const input = document.getElementById('input');
const answer = document.getElementById('answer')

button.addEventListener('click', ()=>{
	answer.innerHTML = checkValue(input.value)
})

