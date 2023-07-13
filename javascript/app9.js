const RegistrarNombre = document.getElementById("name");
const BotonRegistrar = document.getElementById("boton");
const bodyTabla = document.getElementById("inventario");
const MostrarContenido = document.getElementById("cuerpo");
const PuertaSalida = document.getElementById("salida");
const Score = document.getElementById("scorefinal")
const BotonResultado = document.getElementById("enviarresultado")
const Player1 = document.getElementById("player");
const Tiempo1 = document.getElementById("score");

let mesa = document.getElementById("mesa");
let bata= document.getElementById("bata");
let caja= document.getElementById("caja");
let invent= document.getElementById("inventario");
let nota = document.getElementById("nota");
let opcion1;
let opcion2;

const Personaje = [];
const inventario = [];


RegistrarNombre.value = "";


BotonRegistrar.addEventListener("click", (e) =>{
    e.preventDefault();
    registrarusuario();
})

function Persona(nombre){
    this.nombre = nombre;
}

function registrarusuario(){
    const  Usuario = new Persona(RegistrarNombre.value);
    Personaje.push(Usuario)
    alert("Preparate para jugar " + Usuario.nombre);
if(registrarusuario){
MostrarContenido.style.display = "grid"
BotonRegistrar.style.display = "none"
}

    
}


function Objeto(nombre, caracteristica) {
    this.nombre = nombre;
    this.caracteristica = caracteristica;
}

function generarTabla(){
    bodyTabla.innerHTML = "";
     inventario.forEach((elemento) => {
        
        bodyTabla.innerHTML = bodyTabla.innerHTML +
        ` <p>${elemento.nombre}</p>
            `;
     })
    
    }




nota.addEventListener("click", btnnota);
function btnnota(){
    alert("En mi intento de preparar a mis estudiantes como los mejores en Química he diseñado este desafío. Completa el mismo o sufre las consecuencias")
}

caja.addEventListener("click", btncaja)
function btncaja(){
   
    const control= inventario.find((elemento) => (elemento.nombre === "Bloque de metal")) && inventario.find((elemento) => (elemento.nombre === "Mechero de Bunsen")) && inventario.find((elemento) => (elemento.nombre === "Molde de llave"))

if(control){
    alert("Tienes los elementos para poder crear la llave. Con la llave creada se abrió la caja en la que encontraste una Tabla Periódica");
    
    TablaPeriodiocaImg = document.createElement("img");
    TablaPeriodiocaImg.src = "./img/tabla.jpg"
   
    document.querySelector("body").appendChild(TablaPeriodiocaImg)

    TablaPeriodiocaImg.addEventListener("click", btnTabla)

function btnTabla(){
    const TablaPeriodioca = [{ nombre: "Oro", simbolo: "Au", z: 79 }, { nombre: "Xenón", simbolo: "Xe", z: 54 }, { nombre: "Litio", simbolo: "Li", z: 3 }, { nombre: "Oxígeno", simbolo: "O", z: 8 }];
    mirar = parseFloat(prompt("Que deseas ver de la tabla: 1- Nombre de elementos, 2-Simbolos, 3- Numero atómico"));

    if (mirar === 1) {
        TablaPeriodioca.forEach((elemento) => alert(elemento.nombre));
    } else {
        if (mirar === 2) {
            TablaPeriodioca.forEach((elemento) => alert(elemento.simbolo));
        } else {
            if (mirar === 3) {
                TablaPeriodioca.forEach((elemento) => alert(elemento.z));
            }
        }
    }
}
    
    
}else{
    alert("Sigue buscando hasta que tengas todos los elementos para crear la llave")
}
}

mesa.addEventListener("click", btnmesa);



function btnmesa() {

    opcion1 = parseFloat(prompt("Alumno " + Personaje[0].nombre + " Frente a ti hay dos objetos. ¿Cual deseas recoger y revisar primero? 1-bloque de metal, 2-Mechero de Bunsen"));

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



bata.addEventListener("click", btnbata);

function btnbata(){
    
                opcion2 = parseFloat(prompt("Bien estudiante " + Personaje[0].nombre + " En el bolsillo de la bata encontraste dos objetos. ¿Cual deseas recoger y revisar primero? 1-Mensaje en papel, 2-Molde de llave"));


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

PuertaSalida.addEventListener("click", btnSalida);

function findejuego(){
    alert("Felicidades! Completaste el juego");
    MostrarContenido.style.display = "none";
    RegistrarNombre.style.display= "none"
   TablaPeriodiocaImg.style.display = "none"
Score.style.display = "block"
}

function btnSalida(){
    const codigo = parseFloat(prompt("Cual es el código de salida " + Personaje[0].nombre));
    codigo === 795438 ? findejuego() : alert("Código ingresado incorrecto");
 
}

function resultadoFinal (nombre, tiempo){
    this.nombre = nombre;
    this.tiempo = tiempo;
}

BotonResultado.addEventListener("click", btnResultado)

function btnResultado(){
    const UsuarioTiempo = new resultadoFinal(Player1.value, Tiempo1.value);

    const UsuarioTiempoJSON = JSON.stringify(UsuarioTiempo);

    localStorage.setItem("name", UsuarioTiempoJSON);

    const UsuarioTiempoString = localStorage.getItem("name")
    
    const UsuarioTiempoParse = JSON.parse(UsuarioTiempoString);

    console.log(UsuarioTiempoParse)
 

}



