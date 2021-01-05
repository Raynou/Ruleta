'use strict'
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
    var e = 0;
    for(let i = 0; i < array_datos.length; i++){
        
        
        var nuevoElemento = document.createElement(`li`);
        nuevoElemento.className = 'datos';
        var nuevoTexto = document.createTextNode(array_datos[i]);
        nuevoElemento.appendChild(nuevoTexto);
        var selectorUL = document.getElementById('listOfThings');
        selectorUL.appendChild(nuevoElemento);    
            
        
    }
    
}

function tomarDatos(){
    var dato = document.getElementsByClassName('datos');
    console.log(dato);
}