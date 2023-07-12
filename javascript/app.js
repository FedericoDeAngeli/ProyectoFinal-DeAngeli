
function temperatura(){ 
operacion = parseFloat(prompt("Cual conversión deseas hacer: 1- Celsius a Farenheit; 2- Celsius a Kelvin"));

switch(operacion){
case 1:
    num1 = parseFloat(prompt("Dame el valor a convertir"));
    resultado = (1.8 * num1) + 32;
    alert ("El resultado es " +  resultado + "°F");
    break;
case 2:
    num1 = parseFloat(prompt("Dame el valor a convertir"));
    resultado = num1 + 273;
    alert ("El resultado es " +  resultado + "K");
    break;
default:
    alert("Valor ingresado incorrecto");
}
}

function presion(){
operacion = parseFloat(prompt("Cual conversión deseas hacer: 1- Atmósferas a mmHg; 2- Atmósferas a hPa"));

switch(operacion){
    case 1:
        num1 = parseFloat(prompt("Dame el valor a convertir"));
        resultado = num1 * 760;
        alert ("El resultado es " +  resultado + "mmHg");
        break;
    case 2:
        num1 = parseFloat(prompt("Dame el valor a convertir"));
        resultado = num1 * 1013;
        alert ("El resultado es " +  resultado + "hPa");
        break;
    default:
        alert("Valor ingresado incorrecto");
}
}

function calculadora(){
operacion = parseFloat(prompt("Cual conversión deseas hacer: 1- Sumar; 2- Restar; 3- Multiplicar; 4- Dividir"));
switch(operacion){
    case 1:
        num1 = parseFloat(prompt("Dame el valor del primer número"));
        num2 = parseFloat(prompt("Dame el valor del segundo número"));
        resultado = num1 + num2;
        alert ("El resultado es " +  resultado);
        break;
    case 2:
        num1 = parseFloat(prompt("Dame el valor del primer número"));
        num2 = parseFloat(prompt("Dame el valor del segundo número"));
        resultado = num1 - num2;
        alert ("El resultado es " +  resultado);
        break;
    case 3:
        num1 = parseFloat(prompt("Dame el valor del primer número"));
        num2 = parseFloat(prompt("Dame el valor del segundo número"));
        resultado = num1 * num2;
        alert ("El resultado es " +  resultado);
        break;
    case 4:
        num1 = parseFloat(prompt("Dame el valor del primer número"));
        num2 = parseFloat(prompt("Dame el valor del segundo número"));
        resultado = num1 / num2;
        alert ("El resultado es " +  resultado);
        break;
    default:
        alert("Valor ingresado incorrecto");
}
}

alert("Bienvenido al conversor de unidades del Profe Fede");
let num1;
let num2;
let resultado;
let opcion;
let operacion;
let continuar;

do{
opcion = parseFloat(prompt("Cual conversión deseas realizar: 1- Temperatura; 2- Presión; 3-Función calculadora"));

if(opcion === 1){
    temperatura();
}else{
    if(opcion === 2){
        presion();
    }else{
        if(opcion ===3){
            calculadora();
        }else{
            alert("Opción seleccionada incorrecta");
        }
    }
}
continuar = prompt("¿Desea continuar calculando? si / no");
}while(continuar === "si" || continuar === "SI" || continuar === "Si"){
    alert("Programa finalizado. Gracias por usar la calculadora del Profe Fede");
}