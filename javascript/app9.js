const RegistrarNombre = document.getElementById("name");
const BotonRegistrar = document.getElementById("boton");

BotonRegistrar.addEventListener("click", (e) =>{
    e.preventDefault();
    registrarusuario();
})

function Persona(nombre){
    this.nombre = nombre;
}

function registrarusuario(){

    const  Usuario = new Persona(RegistrarNombre.value);
    Personaje.push(Usuario);

    
}
const Personaje = [];

function Objeto(nombre, caracteristica) {
    this.nombre = nombre;
    this.caracteristica = caracteristica;
}

function generarTabla(){

     inventario.forEach((elemento) => {
     const bodyTabla = document.getElementById("inventario");

    
        bodyTabla.innerHTML = bodyTabla.innerHTML +
        ` <p>${elemento.nombre}</p>
            `;
     })
    
    }

    alert("Preparate para jugar " + Personaje.nombre + " " + Persona.apellido);

alert("¿Que elemento deseas inspeccionar?")

let mesa = document.getElementById("mesa");
let bata= document.getElementById("bata");
let caja= document.getElementById("caja");
let invent= document.getElementById("inventario");
let nota = document.getElementById("nota")
const inventario = [];

nota.addEventListener("click", btnnota);
function btnnota(){
    alert("En mi intento de preparar a mis estudiantes como los mejores en Química he diseñado este desafío. Completa el mismo o sufre las consecuencias")
}

caja.addEventListener("click", btncaja)
function btncaja(){
   
    const control= inventario.find((elemento) => (elemento.nombre === "Bloque de metal")) && inventario.find((elemento) => (elemento.nombre === "Mechero de Bunsen")) && inventario.find((elemento) => (elemento.nombre === "Molde de llave"))

if(control){
    alert("Tienes los elementos para poder crear la llave. Con la llave creada se abrió la caja en la que encontraste una Tabla Periódica");
    
    const TablaPeriodiocaImg = document.createElement("img");
    TablaPeriodiocaImg.src = "./img/tabla.jpg"
    document.querySelector("TPeriodica").appendChild(TablaPeriodiocaImg)
    
    
}else{
    alert("Sigue buscando hasta que tengas todos los elementos para crear la llave")
}
}

mesa.addEventListener("click", btnmesa);

let opcion1

function btnmesa() {

    opcion1 = parseFloat(prompt("Alumno " + Personaje.nombre + " Frente a ti hay dos objetos. ¿Cual deseas recoger y revisar primero? 1-bloque de metal, 2-Mechero de Bunsen"));

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
PTable = document.getElementById("TPeriodica")
PTable.addEventListener("click", btnTabla)

function btnTabla(){
    const TablaPeriodioca = [{ nombre: "Oro", simbolo: "Au", z: 79 }, { nombre: "Xenón", simbolo: "Xe", z: 54 }, { nombre: "Litio", simbolo: "Li", z: 3 }, { nombre: "Oxígeno", simbolo: "O", z: 8 }];
    mirar = parseFloat(prompt("Recuerda el mensaje de socorro que tienes: AuXeLiO. Que deseas ver de la tabla: 1- Nombre de elementos, 2-Simbolos, 3- Numero atómico"));

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