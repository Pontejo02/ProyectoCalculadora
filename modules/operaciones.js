function opera(operacion, valor1, valor2){
            const acciones ={
                sumar: (a,b) => a+b,
                restar: (a,b) => a-b,
                multiplicar: (a,b) => a*b,
                dividir: (a,b) => a/b
            };
           return acciones[operacion]?.(valor1,valor2);
    }
export{opera};