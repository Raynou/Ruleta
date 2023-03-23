'use strict'

//Mouse and keyspress events 
let btnAdd = document.querySelector('#addElement');
btnAdd.addEventListener('click', ()=>{
    añadirDatos();
});

let btnSpin = document.querySelector('#spinBtn');
btnSpin.addEventListener('click', ()=>{
    spinRoulette();
});



//Main functions
function añadirDatos(){
    let array_datos = [0];

    for (let i = 0; i < array_datos.length; i++) {
        for (let j = 0; j < 1; j++) {
            array_datos[i]=document.getElementById('thing-input').value;
            document.getElementById('thing-input').value = ''; 
        }
        
    }
    

    /**Ticket #2: Aquí tengo algo que arreglar con las etiquetas, ya que al momento
     * de meter las cosas dentro de otras cajas para que el HTML quede
     * bien estructurado, los selectores se vuelven locos, ya que no
     * pueden seleccionar elementos del body directamente porque estan
     * en otra caja
    */
    for(let i = 0; i < array_datos.length; i++){
        
        
        let nuevoElemento = document.createElement(`li`);
        nuevoElemento.className = 'datos';
        let nuevoTexto = document.createTextNode(array_datos[i]);
        nuevoElemento.appendChild(nuevoTexto);
        let selectorUL = document.getElementById('listOfThings');
        selectorUL.appendChild(nuevoElemento);    
            
        
    }
    
}

function spinRoulette(){
    let datos = [];
    let datos = document.getElementsByClassName('datos');
    let choiceIndex = Math.floor(Math.random() * datos.length);
    console.log(`Congratulations! The winner is: ${datos[choiceIndex].innerHTML}`);

    let winnerTag = document.createElement('h1');
    winnerTag.id = 'winnerPanel';
    let winner = document.createTextNode(`Congratulations! The winner is: ${datos[choiceIndex].innerHTML}`);
    winnerTag.appendChild(winner);

    let body = document.querySelector('body');;
    body.appendChild(winnerTag);
        
}
