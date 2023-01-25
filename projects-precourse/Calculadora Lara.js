let totalArray = [];

    const value1 = parseFloat( prompt ("Introduzca el primer valor: "));
    const value2 = parseFloat( prompt ("Introduzca el segundo valor: "));
    
    
    if(isNaN(value1) || isNaN(value2)){
        alert("El valor introducido es incorrecto, actualice la página de nuevo y vuelva a introducir los números");}
    else if(value1 == 0){
        console.log("La raiz cuadrada de " + value2 + " es " + Math.sqrt(value2).toFixed(3))}
    else if (value2 == 0){
        console.log("La raiz cuadrada de " + value1 + " es " + Math.sqrt(value1).toFixed(3))}
    
    
    if(Number(value1) && Number(value2)){
    
           sum = value1 + value2;
           totalArray.push(sum);
            
           subtract = value1 - value2;
           totalArray.push(subtract);
            
           multiplication = Number((value1 * value2).toFixed(3));
           totalArray.push(multiplication);
            
           division = Number((value1 / value2).toFixed(3));
           totalArray.push(division);
            
        
         }

    
console.log(totalArray);
    
for(let i = 0; i < totalArray.length; i++){
};
    
    console.log("El resultado de la suma de " + value1 + " + " + value2 + " es: " + totalArray[0]);
    console.log("El resultado de la resta de " + value1 + " - " + value2 + " es: " + totalArray[1]);
    console.log("El resultado de la multiplicación de " + value1 + " * " + value2 + " es: " + totalArray[2]);
    console.log("El resultado de la división de " + value1 + " / " + value2 + " es: " + totalArray[3]);