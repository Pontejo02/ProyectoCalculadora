// -------------------------------
// HACER LOS IMPORTS DE LAS FUNCIONES QUE VAMOS A USAR
// -------------------------------
import { sumar, restar, multiplicar, dividir, opera } from "./modules/operaciones.js";
//import {  } from "modules/historial.js";
//import {  } from "modules/ui.js";
import { borrar } from "./modules/utils.js";


// -------------------------------
// CREAR EVENTOS EN LOS BOTONES QUE LLAMEN A LAS
// FUNCIONES IMPORTADAS PREVIAMENTE
// -------------------------------

//recogemos las etiquetas op y las transformamos a objetos
const botones= document.querySelectorAll(".op");
const numeros= document.querySelectorAll(".num");
const resul= document.querySelectorAll(".igual");
const num1= document.getElementById("num1");
const num2= document.getElementById("num2");
const resultado= document.getElementById("resultado");


let operacion=null;

//por cada uno le añadimos el evento del click, siempre cogeriamos el nombre del atributo seleccionado.
botones.forEach(n =>{
    n.addEventListener("click",e =>{
        const op=n.getAttribute("data-op");
        borrar(op);
        operacion=op;
        })
    })


let arraynum=[];
numeros.forEach(n =>{
    n.addEventListener("click",e =>{
        const num=n.getAttribute("data-num");
            arraynum.push(num);
            if(operacion==null){
                num1.value=Number(arraynum.join(''));
            }else{
                //arraynum=[];
                num2.value=Number(arraynum.join(''));
                //operacion=null;
            }
        
    })
    
})

resul.forEach(n =>{
    n.addEventListener("click",e =>{
        const igual=n.getAttribute("data-op");
        let resultadoFinal=opera(operacion);
        resultado.textContent=resultadoFinal;
        operacion=null;
        arraynum=[];
    })

})



