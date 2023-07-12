alert("Bienvenido a la Sala de Escape El laboratorio del Prof. Fede");
alert("En esta sala pondremos a prueba tu habilidades para escapar, pero primero creemos tu personaje");

const jugador = document.getElementById("name");

function Personaje(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

function Objeto(nombre, caracteristica) {
    this.nombre = nombre;
    this.caracteristica = caracteristica;
}

function generarTabla(){
    // inventario.forEach((elemento) => {
    // const inventariotxt = document.createElement("p");
    // inventariotxt.innerHTML = <p>${elemento.nombre}</p>
    // inventariotxt.append("p");
    //  }) 
     inventario.forEach((elemento) => {
     const bodyTabla = document.getElementById("inventario");

    
        bodyTabla.innerHTML = bodyTabla.innerHTML +
        ` <p>${elemento.nombre}</p>
            `;
     })
    
    }

const Persona = new Personaje(prompt("Cual es tu nombre"), prompt("¿Cual es tu apellido"), prompt("¿Cuántos años tienes?"));

alert("Preparate para jugar " + Persona.nombre + " " + Persona.apellido);

alert("¿Que elemento deseas inspeccionar?")

let mesa = document.getElementById("mesa");
let bata= document.getElementById("bata");
let caja= document.getElementById("caja");
let invent= document.getElementById("inventario");
const inventario = [];

mesa.addEventListener("click", btnmesa);

let opcion1

function btnmesa() {

    opcion1 = parseFloat(prompt("Alumno " + Persona.apellido + " Frente a ti hay dos objetos. ¿Cual deseas recoger y revisar primero? 1-bloque de metal, 2-Mechero de Bunsen"));

    if (opcion1 === 1) {
  
        const componente1 = inventario.find((elemento) => elemento.nombre === "Bloque de metal")
        
        if(componente1){
            alert("Ya tienes Bloque de metal")
        }else{
            const metal = new Objeto("Bloque de metal", "Puede ser fundido con calor");
        alert("Recogiste " + metal.nombre + " y sirve porque " + metal.caracteristica);
            inventario.push(metal);
            alert("Agregado " + metal.nombre + " a tu inventario");
            generarTabla();
        }

            
   
    } else {
        if (opcion1 === 2) {

            const componente2 = inventario.find((elemento) => elemento.nombre === "Mechero de Bunsen");

            if(componente2){
                alert("Ya tienes Mechero de Bunsen")
            }else{
            const bunsen = new Objeto("Mechero de Bunsen", "Se usa para calentar objetos");
            alert("Recogiste " + bunsen.nombre + " y sirve porque " + bunsen.caracteristica);
            inventario.push(bunsen);
            alert("Agregado " + bunsen.nombre + " a tu inventario");
            generarTabla();
            }
        } else {
            alert("Opcion seleccionada incorrecta");
        }
    }
    
} 


let opcion2
bata.addEventListener("click", btnbata);

function btnbata(){
    
                opcion2 = parseFloat(prompt("Bien estudiante " + Persona.apellido + " En el bolsillo de la bata encontraste dos objetos. ¿Cual deseas recoger y revisar primero? 1-Mensaje en papel, 2-Molde de llave"));


                if (opcion2 === 1) {

                  const  componente3 = inventario.find((elemento) => elemento.nombre === "Papel con mensaje");

                    if(componente3){
                        alert("Ya tienes Papel con Mensaje")
                    }else{

                    const mensaje = new Objeto("Papel con mensaje", "tiene un mensaje de socorro para leer: AuXeLiO");
                    alert("Recogiste " + mensaje.nombre + " y sirve porque " + mensaje.caracteristica);
                    inventario.push(mensaje);
                    alert("Agregado " + mensaje.nombre + " a tu inventario");
                    generarTabla();
                    }
                } else {
                     if (opcion2 === 2) {
                        const componente4 = inventario.find((elemento) => elemento.nombre === "Molde de llave");

                        if(componente4){
                            alert("Ya tienes Molde de llave");
                        }else{
                        const molde = new Objeto("Molde de llave", "podrías crear una llave con metal fundido");
                        alert("Recogiste " + molde.nombre + " y sirve porque " + molde.caracteristica);
                        inventario.push(molde);
                        alert("Agregado " + molde.nombre + " a tu inventario");
                        generarTabla();
                        }
                    } else {
                        alert("Opcion seleccionada incorrecta");
                    }
                }
}


