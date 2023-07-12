// const inventario = []

// function objeto(nombre, funciona) {
//     this.nombre = nombre
//     this.funciona = funciona
// }
// const metal = new objeto("metal", "algo") 
// inventario.push(metal)

// const mechero = new objeto ("mechero", "fuego");
// inventario.push(mechero)

// const mensaje = new objeto("mensaje", "auxelio")
// inventario.push(mensaje)


// //inventario = [{nombre:"metal", funciona:"algo"}, {nombre:"mechero", funciona:"fuego"}, {nombre:"mensaje", funciona:"auxelio"}],

// console.log(inventario)

// function generarTabla(){
//     const bodyTabla = document.getElementById("inventario");

//     inventario.forEach((elemento) => {
//         bodyTabla.innerHTML = bodyTabla.innerHTML +
//         ` <p>${elemento.nombre}</p>
//             `;
//     })
    
//     }

//     generarTabla();

// const RegistrarNombre = document.getElementById("name");
// const BotonRegistrar = document.getElementById("boton");

// BotonRegistrar.addEventListener("click", (e) =>{
//     e.preventDefault();
//     registrarusuario();
// })

// function Persona(nombre){
//     this.nombre = nombre;
// }

// function registrarusuario(){

//     const Usuario = new Persona(RegistrarNombre.value);
//     console.log(Usuario)
//     Personaje.push(Usuario);
// }

// const Personaje = []

// console.log(Personaje)


const inventario = [{nombre:"metal", fun:"algo"}, {nombre:"bunsen", fun:"otra cosa"}, {nombre:"molde", fun:"estotro"}]

const control= inventario.find((elemento) => (elemento.nombre === "metal")) && inventario.find((elemento) => (elemento.nombre === "bunsen")) && inventario.find((elemento) => (elemento.nombre === "molde"))

if(control){
    alert("Tienes los elementos para poder crear la llave")
}else{
    alert("Sigue buscando hasta que tengas todos los elementos para crear la llave")
}