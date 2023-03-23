'use strict'

//Mouse and keyspress events 
let btnAdd = document.querySelector('#addElement');
btnAdd.addEventListener('click', ()=>{
    addData();
});

let btnSpin = document.querySelector('#spinBtn');
btnSpin.addEventListener('click', ()=>{
    spinRoulette();
});



//Main functions
function addData(){

    let input = document.getElementById('thing-input').value;
    document.getElementById('thing-input').value = ''

    let newElement = document.createElement(`li`);
    newElement.className = 'datos';
    let newText = document.createTextNode(input);
    newElement.appendChild(newText);
    let selectorUl = document.getElementById('listOfThings');
    selectorUl.appendChild(newElement);

}

function spinRoulette(){
    let data = [];
    data = document.getElementsByClassName('datos');
    let choiceIndex = Math.floor(Math.random() * datos.length);
    console.log(`Congratulations! The winner is: ${datos[choiceIndex].innerHTML}`);

    let winnerTag = document.createElement('h1');
    winnerTag.id = 'winnerPanel';
    let winner = document.createTextNode(`Congratulations! The winner is: ${datos[choiceIndex].innerHTML}`);
    winnerTag.appendChild(winner);

    let body = document.querySelector('body');
    body.appendChild(winnerTag);
        
}
