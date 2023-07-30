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
let bata = document.getElementById("bata");
let caja = document.getElementById("caja");
let invent = document.getElementById("inventario");
let nota = document.getElementById("nota");
let opcion1;
let opcion2;

const Personaje = [];
const inventario = [];


RegistrarNombre.value = "";


BotonRegistrar.addEventListener("click", (e) => {
    e.preventDefault();
    registrarusuario();
})

function Persona(nombre) {
    this.nombre = nombre;
}

function registrarusuario() {
    const Usuario = new Persona(RegistrarNombre.value);
    Personaje.push(Usuario)
    Swal.fire({
        icon: `success`,
        text: `Registrado. Preparate para jugar ` + Usuario.nombre,
    })

    function FinJuego() {
        MostrarContenido.style.display = "none"
        BotonRegistrar.style.display = "none"
        Swal.fire({
            icon: "error",
            text: "Se acabó el tiempo. Perdiste el juego"
        })
    }

    if (registrarusuario) {

        setTimeout(() => {
            FinJuego();
        }, 600000);
        MostrarContenido.style.display = "grid"
        BotonRegistrar.style.display = "none"
    }


}

setInterval(() => {
    Toastify({
        text: "Se acaba de ir un valioso minuto",
        duration: 3000,
        style: {
            background: "#74c69d"
        }
    }).showToast();
}, 60000);


function Objeto(nombre, caracteristica) {
    this.nombre = nombre;
    this.caracteristica = caracteristica;
}

function generarTabla() {
    bodyTabla.innerHTML = "";
    inventario.forEach((elemento) => {

        bodyTabla.innerHTML = bodyTabla.innerHTML +
            ` <p>${elemento.nombre}</p>
            `;
    })

}




nota.addEventListener("click", btnnota);
function btnnota() {
    Swal.fire({
        title: 'Nota pegada en la pizarra',
        text: "En mi intento de preparar a mis estudiantes como los mejores en Química he diseñado este desafío. Completa el mismo o sufre las consecuencias",
        imageUrl: './img/cientifico-loco.jpg',
        imageWidth: 200,
        imageHeight: 300,
        imageAlt: 'Científico Loco',
    })


}

caja.addEventListener("click", btncaja)
function btncaja() {

    const control = inventario.find((elemento) => (elemento.nombre === "Bloque de metal")) && inventario.find((elemento) => (elemento.nombre === "Mechero de Bunsen")) && inventario.find((elemento) => (elemento.nombre === "Molde de llave"))

    if (control) {

        Swal.fire({
            icon: 'success',
            title: 'Manos a la obra!',
            text: "Tienes los elementos para poder crear la llave. Con la llave creada se abrió la caja en la que encontraste una Tabla Periódica",

        });

        TablaPeriodiocaImg = document.createElement("img");
        TablaPeriodiocaImg.src = "./img/tabla.jpg"

        document.querySelector("body").appendChild(TablaPeriodiocaImg)

        TablaPeriodiocaImg.addEventListener("click", btnTabla)
        caja.style.display = "none";


        function btnTabla() {
            const TablaPeriodioca = [{ nombre: "Oro", simbolo: "Au", z: 79 }, { nombre: "Xenón", simbolo: "Xe", z: 54 }, { nombre: "Litio", simbolo: "Li", z: 3 }, { nombre: "Oxígeno", simbolo: "O", z: 8 }];

            Swal.fire({
                title: 'Tabla Periódica',
                text: "Recuerda el mensaje: AuXeLiO. Cual información de la Tabla deseas consultar?",
                showDenyButton: true,
                showCancelButton: true,
                showConfirmButton: true,
                confirmButtonText: 'Nombre de los elementos',
                denyButtonText: "Símbolo de los elementos",
                cancelButtonText: "Números atómicos"
            }).then((result) => {
                if (result.isConfirmed) {
                    let mensaje = "";
                    
                    TablaPeriodioca.forEach((elemento) => {
                      mensaje+= elemento.nombre + " ";
                    })
                    swal.fire({
                        title: mensaje
                    })
                } else if (result.isDenied) {
                    let mensaje = "";
                    
                    TablaPeriodioca.forEach((elemento) => {
                      mensaje+= elemento.simbolo + " ";
                    })
                    swal.fire({
                        title: mensaje
                    })
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    let mensaje = "";
                    
                    TablaPeriodioca.forEach((elemento) => {
                      mensaje+= elemento.z + " ";
                    })
                    swal.fire({
                        title: mensaje
                    })

                }
            })

        }


    } else {
        Swal.fire({
            icon: 'error',
            title: "Todavía no..",
            text: "Sigue buscando hasta que tengas todos los elementos para crear la llave",
        })

    }
}

mesa.addEventListener("click", btnmesa);



function btnmesa() {

    Swal.fire({
        title: "Mesada de Laboratorio",
        text: "Alumno " + Personaje[0].nombre + " Frente a ti hay dos objetos. ¿Cual deseas recoger y revisar primero?",
        confirmButtonText: "Bloque de metal",
        confirmButtonColor: "#74c69d",
        showDenyButton: "true",
        denyButtonText: "Mechero de Bunsen",
        denyButtonColor: "#073b4c"
    }).then((result) => {
        if (result.isConfirmed) {
            const componente1 = inventario.find((elemento) => elemento.nombre === "Bloque de metal")

            if (componente1) {
                Toastify({
                    text: "Ya tienes Bloque de metal en tu inventario",
                    duration: 3000,
                    style: {
                        background: "#74c69d"
                    }
                }).showToast();

            } else {
                const metal = new Objeto("Bloque de metal", "Puede ser fundido con calor");
                Toastify({
                    text: "Recogiste " + metal.nombre + " y sirve porque " + metal.caracteristica,
                    duration: 3000,
                    style: {
                        background: "#74c69d"
                    }
                }).showToast();
                inventario.push(metal);
                Toastify({
                    text: "Agregado " + metal.nombre + " a tu inventario",
                    duration: 3000,
                    style: {
                        background: "#74c69d"
                    }
                }).showToast();

                generarTabla();
            }
        } else if (result.isDenied) {
            const componente2 = inventario.find((elemento) => elemento.nombre === "Mechero de Bunsen");

            if (componente2) {
                Toastify({
                    text: "Ya tienes Mechero de Bunsen",
                    duration: 3000,
                    style: {
                        background: "#073b4c"
                    }
                }).showToast();

            } else {
                const bunsen = new Objeto("Mechero de Bunsen", "Se usa para calentar objetos");
                Toastify({
                    text: "Recogiste " + bunsen.nombre + " y sirve porque " + bunsen.caracteristica,
                    duration: 3000,
                    style: {
                        background: "#073b4c"
                    }
                }).showToast();

                inventario.push(bunsen);
                Toastify({
                    text: "Agregado " + bunsen.nombre + " a tu inventario",
                    duration: 3000,
                    style: {
                        background: "#073b4c"
                    }
                }).showToast();

                generarTabla();
            }
        }
    })

}



bata.addEventListener("click", btnbata);

function btnbata() {

    Swal.fire({
        title: "Bata del profesor.",
        text: "Bien estudiante " + Personaje[0].nombre + " En el bolsillo de la bata encontraste dos objetos. ¿Cual deseas recoger y revisar primero? 1-Mensaje en papel, 2-Molde de llave",
        confirmButtonText: "Papel con mensaje",
        confirmButtonColor: "#ff758f",
        showDenyButton: "true",
        denyButtonText: "Molde para llave",
        denyButtonColor: "#6930c3"
    }).then((result) => {
        if (result.isConfirmed) {
            const componente3 = inventario.find((elemento) => elemento.nombre === "Papel con mensaje");

            if (componente3) {
                Toastify({
                    text: "Ya tienes Papel con Mensaje",
                    duration: 3000,
                    style: {
                        background: "#ff758f"
                    }
                }).showToast();

            } else {

                const mensaje = new Objeto("Papel con mensaje", "tiene un mensaje de socorro para leer: AuXeLiO");
                Toastify({
                    text: "Recogiste " + mensaje.nombre + " y sirve porque " + mensaje.caracteristica,
                    duration: 3000,
                    style: {
                        background: "#ff758f"
                    }
                }).showToast();

                inventario.push(mensaje);
                Toastify({
                    text: "Agregado " + mensaje.nombre + " a tu inventario",
                    duration: 3000,
                    style: {
                        background: "#ff758f"
                    }
                }).showToast();

                generarTabla();
            }
        } else if (result.isDenied) {
            const componente4 = inventario.find((elemento) => elemento.nombre === "Molde de llave");

            if (componente4) {
                Toastify({
                    text: "Ya tienes Molde de llave",
                    duration: 3000,
                    style: {
                        background: "#6930c3"
                    }

                }).showToast();

            } else {
                const molde = new Objeto("Molde de llave", "podrías crear una llave con metal fundido");
                Toastify({
                    text: "Recogiste " + molde.nombre + " y sirve porque " + molde.caracteristica,
                    duration: 3000,
                    style: {
                        background: "#6930c3"
                    }
                }).showToast();

                inventario.push(molde);
                Toastify({
                    text: "Agregado " + molde.nombre + " a tu inventario",
                    duration: 3000,
                    style: {
                        background: "#6930c3"
                    }
                }).showToast();

                generarTabla();
            }
        }
    })
}


PuertaSalida.addEventListener("click", btnSalida);

function findejuego() {
    alert("Felicidades! Completaste el juego");
    MostrarContenido.style.display = "none";
    RegistrarNombre.style.display = "none"
    TablaPeriodiocaImg.style.display = "none"
    Score.style.display = "block"
}

function btnSalida() {

  
    (async () => {
       const {value: password} = await Swal.fire({
            text: "Cual es el código de salida " + Personaje[0].nombre,
            input: "password",
            inputPlaceholder: "password",
            inputLabel: "Código"
    
       })
        password === "795438" ? findejuego() : alert("Código ingresado incorrecto");


   
  
    //const codigo = parseFloat(prompt("Cual es el código de salida " + Personaje[0].nombre));
    
})()
}

function resultadoFinal(nombre, tiempo) {
    this.nombre = nombre;
    this.tiempo = tiempo;
}

BotonResultado.addEventListener("click", btnResultado)

function btnResultado() {
    const UsuarioTiempo = new resultadoFinal(Player1.value, Tiempo1.value);

    const UsuarioTiempoJSON = JSON.stringify(UsuarioTiempo);

    localStorage.setItem("name", UsuarioTiempoJSON);

    const UsuarioTiempoString = localStorage.getItem("name")

    const UsuarioTiempoParse = JSON.parse(UsuarioTiempoString);

    console.log(UsuarioTiempoParse)


}



