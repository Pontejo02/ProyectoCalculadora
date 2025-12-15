

//Funcion para borrar los datos de la calculadora
function borrar(op){
    if(op=="borrar" || op=="borrarTodo"){
            num1.value="";
            num2.value="";
            resultado.textContent = "0";
            op=null;
            console.log(op);
            return op;
        }else{
            return op;
        }
}

export {borrar};