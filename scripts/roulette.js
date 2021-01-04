'use strict'

function tomarDatos(){
    var array_datos = [];
    /**Ticket #1: Esto lo tengo que automatizar, usando solo un input y leyendo datos
     * de uno en uno cada vez que presione un botón
     */
    var dato1 = document.getElementById('thing1-input').value;
    var dato2 = document.getElementById('thing2-input').value;
    var dato3 = document.getElementById('thing3-input').value;
    var dato4 = document.getElementById('thing4-input').value;

    array_datos[0] = dato1;
    array_datos[1] = dato2;
    array_datos[2] = dato3;
    array_datos[3] = dato4;


    /**Ticket #2: Aquí tengo algo que arreglar con las etiquetas, ya que al momento
     * de meter las cosas dentro de otras cajas para que el HTML quede
     * bien estructurado, los selectores se vuelven locos, ya que no
     * pueden seleccionar elementos del body directamente porque estan
     * en otra caja
    */
    var index;
    for(index in array_datos){
        var nuevoElemento = document.createElement('li');
        var nuevoTexto = document.createTextNode(array_datos[index]);

        nuevoElemento.appendChild(nuevoTexto);

        var selectorUL = document.getElementById('listOfThings');
        selectorUL.appendChild(nuevoElemento);
    }
}
