// -------------------------------
// HACER LOS IMPORTS DE LAS FUNCIONES QUE VAMOS A USAR
// -------------------------------
//import { sumar, restar, multiplicar, dividir, opera } from "./modules/operaciones.js";
import { opera } from "./modules/operaciones.js";
//import {  } from "modules/historial.js";
//import {  } from "modules/ui.js";
import { borrarTodo, borrarUltimo } from "./modules/utils.js";


// -------------------------------
// CREAR EVENTOS EN LOS BOTONES QUE LLAMEN A LAS
// FUNCIONES IMPORTADAS PREVIAMENTE
// -------------------------------

//recogemos las etiquetas op y las transformamos a objetos
const botones= document.querySelectorAll(".op");
const borr= document.querySelectorAll(".bo");
const numeros= document.querySelectorAll(".num");
const resul= document.querySelectorAll(".igual");
const num1= document.getElementById("num1");
const num2= document.getElementById("num2");
const resultado= document.getElementById("resultado");


let operacion=null;
//por cada uno le añadimos el evento del click, siempre cogeriamos el nombre del atributo seleccionado.
botones.forEach(n =>{
    n.addEventListener("click",e =>{
        let op=n.getAttribute("data-op");
        if (op==="borrarTodo"){
            op=borrarTodo(op);
            arraynum1.length=0;
            arraynum2.length=0;
        }
        operacion=op;
        })
    })

borr.forEach(n=>{
    n.addEventListener("click",e =>{
        let bo=n.getAttribute("data-bo");
       if(bo==="borrar"){
            console.log(bo);
            if (arraynum2.length!==0){
                borrarUltimo(arraynum2);
                num2.value=Number(arraynum2.join(''));
            }else{
                borrarUltimo(arraynum1);
                num1.value=Number(arraynum1.join(''));
            }
            
        }
    })
})    

let arraynum1=[];
let arraynum2=[];
numeros.forEach(n =>{
    n.addEventListener("click",e =>{
        const num=n.getAttribute("data-num");
            if(operacion==null){
                arraynum1.push(num);
                num1.value=Number(arraynum1.join(''));
            }else{
                arraynum2.push(num);
                num2.value=Number(arraynum2.join(''));
            }
    })
})

resul.forEach(n =>{
    n.addEventListener("click",e =>{
        const igual=n.getAttribute("data-op");
        let resultadoFinal=opera(operacion);
        resultado.textContent=resultadoFinal;
    })

})



