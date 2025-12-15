

//Funcion para borrar los datos de la calculadora
function borrarTodo(op){
    num1.value="";
    num2.value="";
    resultado.textContent = "0";
    op=null;
    return op;
}

function borrarUltimo(arr){
    arr.pop();
    return arr;
}

export {borrarTodo,borrarUltimo};