function opera(operacion){
    let resultadoFinal;
        console.log("Operacion elegida:", operacion);
        if(operacion){
            const valor1 = parseFloat(num1.value);
            const valor2 = parseFloat(num2.value);
            const acciones ={
                sumar: (a,b) => a+b,
                restar: (a,b) => a-b,
                multiplicar: (a,b) => a*b,
                dividir: (a,b) => a/b
            };
            resultadoFinal=acciones[operacion]?.(valor1,valor2);
    }
    return resultadoFinal;
}

export{opera};