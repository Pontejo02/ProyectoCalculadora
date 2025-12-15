


function sumar(a,b){
    return a+b;
}
function restar(a,b){
    return a-b;
}
function multiplicar(a,b){
    return a*b;
}
function dividir(a,b){
    return a/b;
}

function opera(operacion){
    let resultadoFinal;
        console.log("Operacion elegida:", operacion);
        if(operacion){
            const valor1 = parseFloat(num1.value);
            const valor2 = parseFloat(num2.value);
            switch(operacion){
                case "sumar":
                    resultadoFinal=sumar(valor1,valor2);
                    break;
                case "restar":
                    resultadoFinal=restar(valor1,valor2);
                    break;
                case "multiplicar":
                    resultadoFinal=multiplicar(valor1,valor2);
                    break;
                case "dividir":
                    resultadoFinal=dividir(valor1,valor2);
                    break;   
        }
    }
    return resultadoFinal;
}


export{sumar,restar,multiplicar,dividir,opera};