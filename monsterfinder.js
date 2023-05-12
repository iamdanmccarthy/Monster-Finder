let title = document.querySelector('h1');
title.textContent = "👹 Monster Finder 👹";

const resultElement = document.getElementById("result-text")
const monsterButton = document.querySelector('#monster-button')
const checkmark = document.querySelector(".checkmark")
let randomNum = Math.floor((Math.random()*10000));
function whileWaiting() {
    monsterButton.addEventListener("click", () => {
        resultElement.textContent = "Searching..."
    })
}
function textReplace() {
    resultElement.textContent = "No Monsters Found!";
    checkmark.style.display = "block"
    console.log(`This took ${randomNum} milliseconds to log`)
}


whileWaiting();

function init() {
setTimeout(textReplace, randomNum);
}
