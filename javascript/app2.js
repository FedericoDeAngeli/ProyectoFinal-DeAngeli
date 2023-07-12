alert("Bienvenido al Laboratorio del Prof. Fede");
alert("Atento a si mis estudiantes son lo suficientemente aptos, armé este desafío. Si no resuelven, quedarán atrapados por siempre");

let acertijo1;
let continuar1;


do{
acertijo1 = parseFloat(prompt("Que objeto quiere inspeccionar? 1- Pizarra; 2-Delantal; 3-Mesada"));

if (acertijo1 === 1){
    alert("En la pizarra se encuentra escrita la fórmula de un compuesto: hidróxido de calcio");
} else{
    if( acertijo1 === 2){
alert("En el delantal se encontró un mesnsaje de ayuda: AuXeLiO");
    } else{
if(acertijo1 === 3){
    alert("En la mesada se encontró un matraz tirado y derramada una sustancia a la cual al agregarle agua generó proyecciones por la reacción que se produjo");
}else{
    alert("Opción incorrecta, perdiste un valioso minuto");
}
    }
}
continuar1 = prompt("desea investigar en otra parte? Si/No")
} while(continuar1 === "Si"){
alert("Investigación finalizada. Pasamos a la siguiente etapa");
}

let acertijo2;
let acertijo3;
let salida;
let continuar2;
alert("La computadora se ha prendido, en la pantalla requerimos acceso al usuario. La foto de perfil es matraz con una sustancia de color igual al de la mesada");
acertijo2 = prompt("Cual es la clave de la computadora?");
do{
    if(acertijo2 === "ácido"){
        alert("La computadora se ha encendido. El único archivo que vemos tiene un nombre PM");
acertijo3 = parseFloat(prompt("¿Cual es la clave numérica del archivo?"));
if (acertijo3 === 74){
    alert("Ingresaste al archivo, adentro hay una tabla periódica. Observas en la misma algunos símbolos que te resultan familiares.");
alert("Otro mensaje aparece al fondo: la clave de salida es ayudar a quien necesita auxilio");

salida = parseFloat(prompt("Vas al candado de la puerta de salida. El código acepta nueve numeros. Ingresa el código correcto."))
if (salida === 197131716){
alert("Felicidades. Escapaste de la sala del prof. Fede");
}else{
    alert("Clave incorrecta. Perdiste minutos valiosos");

}
}else{
    alert("Clave incorrecta. Perdiste minutos valiosos");
}
    }else{
        alert("Clave incorrecta. Perdiste minutos valiosos");
    }
continuar2 = prompt("Desea intentar de vuelta? Si/No")
}while(continuar2 === "Si"){
    alert("Juego finalizado");
}