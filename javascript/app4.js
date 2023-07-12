alert("Bienvenido a la Sala de Escape El laboratorio del Prof. Fede");
alert("En esta sala pondremos a prueba tu habilidades para escapar, pero primero creemos tu personaje");

function Personaje (nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    }

function Objeto (nombre, caracteristica){
    this.nombre = nombre;
    this.caracteristica = caracteristica;
}

const inventario = [" "];

const Persona = new Personaje(prompt("Cual es tu nombre"), prompt("¿Cual es tu apellido"), prompt("¿Cuántos años tienes?"));

alert("Preparate para jugar " + Persona.nombre + " " + Persona.apellido);

let opcion;
let continuar;
alert("Acabas de ingresar al Laboratorio")
do{
opcion = parseFloat(prompt(Persona.nombre +" ¿Que deseas inspeccionar? 1- Mesada, 2- Bata de Laboratorio"));

if(opcion === 1){

do{
let opcion1
opcion1 = parseFloat(prompt("Alumno " + Persona.apellido + " Frente a ti hay dos objetos. ¿Cual deseas recoger y revisar primero? 1-bloque de metal, 2-Mechero de Bunsen"));


if(opcion1 === 1){

const metal = new Objeto("Bloque de metal","Puede ser fundido con calor");
alert("Recogiste " + metal.nombre + " y sirve porque " + metal.caracteristica);
inventario.push(metal);
}else{
    if(opcion1 === 2){
const bunsen = new Objeto ("Mechero de Bunsen", "Se usa para calentar objetos");
alert("Recogiste " + bunsen.nombre + " y sirve porque " + bunsen.caracteristica);  
inventario.push(bunsen); 
    }else{
        alert("Opcion seleccionada incorrecta");
    }
}
continuar = prompt("¿Deseas recoger otro objeto? si/no");
} while(continuar === "si"){
    alert("Finalizada la investigación en la mesada");
}

}else{
    if(opcion === 2){
        do{
            let opcion2
            opcion2 = parseFloat(prompt("Bien estudiante " + Persona.apellido + " En el bolsillo de la bata encontraste dos objetos. ¿Cual deseas recoger y revisar primero? 1-Mensaje en papel, 2-Molde de llave"));
            
            
            if(opcion2 === 1){
            
            const mensaje = new Objeto("Papel con mensaje","tiene un código para leer");
            alert("Recogiste " + mensaje.nombre + " y sirve porque " + mensaje.caracteristica);
            inventario.push(mensaje);
            }else{
                if(opcion2 === 2){
            const molde = new Objeto ("Molde de llave", "podrías crear una llave con metal fundido");
            alert("Recogiste " + molde.nombre + " y sirve porque " + molde.caracteristica);  
            inventario.push(molde); 
                }else{
                    alert("Opcion seleccionada incorrecta");
                }
            }
            continuar = prompt("¿Deseas recoger otro objeto? si/no");
            } while(continuar === "si"){
                alert("Finalizada la investigación en la bata");
    }
}
continuar = prompt("¿Deseas inspeccionar en otro lado? si/no");
} 
}while(continuar === "si"){
alert("Finalizada la investigación");
} if(continuar === "si" && inventario.length >4){
    alert("Perdiste el juego, no recogiste todos los objetos")
   
}
