const RegistrarNombre = document.getElementById("name");
const BotonRegistrar = document.getElementById("boton");
const bodyTabla = document.getElementById("inventario");
const MostrarContenido = document.getElementById("cuerpo");
const PuertaSalida = document.getElementById("salida");
const Score = document.getElementById("scorefinal")
const BotonResultado = document.getElementById("botonResultado")
const Player1 = document.getElementById("player");
const Tiempo1 = document.getElementById("score");

let mesa = document.getElementById("mesa");
let bata = document.getElementById("bata");
let caja = document.getElementById("caja");
let invent = document.getElementById("inventario");
let nota = document.getElementById("nota");
const h2title = document.getElementById("h2partida")
let opcion1;
let opcion2;

const Personaje = [];
const inventario = [];


RegistrarNombre.value = "";

function Persona(nombre) {
    this.nombre = nombre;
}

BotonRegistrar.addEventListener("click", (e) => {
    e.preventDefault();
    registrarusuario();
})

function registrarusuario() {
    const Usuario = new Persona(RegistrarNombre.value);
    Personaje.push(Usuario)
    Swal.fire({
        icon: `success`,
        text: `Registrado. Preparate para jugar ` + Usuario.nombre,
    })

    iniciarContador();
    MostrarContenido.style.display = "flex"
    BotonRegistrar.style.display = "none"

    setInterval(() => {
        Toastify({
            text: "Queda un minuto menos",
            duration: 3000,
            style: {
                background: "#F70909"
            }
        }).showToast();
      }, 60000);
}

function EndGame() {
    MostrarContenido.style.display = "none"
    BotonRegistrar.style.display = "none"
    h2.style.display ="none"
    Swal.fire({
        icon: "error",
        text: "Se acabó el tiempo. Perdiste el juego"
        
    })
    clearInterval(intervaloContador)
}


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

//FUNCIONES SOBRE LA NOTA DE PAPEL//

nota.addEventListener("click", btnnota);
function btnnota() {
    Swal.fire({
        title: 'Nota pegada en la pizarra',
        text: "Buenas tardes alumno " + Personaje[0].nombre + ", te recuerdo bien. En mi intento de preparar a mis estudiantes como los mejores en Química he diseñado este desafío. Completa el mismo en menos de 10 minutos o éste será tu último examen",
        imageUrl: './img/cientifico-loco.jpg',
        imageWidth: 200,
        imageHeight: 300,
        imageAlt: 'Científico Loco',
    })
}

//FUNCIONES SOBRE LA MESA//
mesa.addEventListener("click", btnmesa);
function btnmesa() {

    Swal.fire({
        title: "Mesada de Laboratorio",
        text: "Alumno " + Personaje[0].nombre + " Frente a ti hay dos objetos. ¿Cual deseas recoger?",
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

//FUNCIONES SOBRE LA BATA//
bata.addEventListener("click", btnbata);
function btnbata() {

    Swal.fire({
        title: "Bata del profesor.",
        text: "Bien estudiante " + Personaje[0].nombre + " en el bolsillo de la bata encontraste dos objetos. ¿Cual deseas recoger?",
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

                const mensaje = new Objeto("Papel con mensaje: AuXeLiO", "tiene un mensaje de socorro para leer: AuXeLiO");
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

//FUNCIONES SOBRE LA CAJA DE MADERA//
caja.addEventListener("click", btncaja)
function btncaja() {

    const control = inventario.find((elemento) => (elemento.nombre === "Bloque de metal")) && inventario.find((elemento) => (elemento.nombre === "Mechero de Bunsen")) && inventario.find((elemento) => (elemento.nombre === "Molde de llave"))

    if (control) {

        Swal.fire({
            icon: 'success',
            title: 'Manos a la obra!',
            text: "Excelente! Ahora tienes los elementos para fundir y crear la llave ¿Recuerdas tu clase de propiedades de la materia?. Con la llave creada se abrió la caja en la que encontraste una Tabla Periódica",

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
                        mensaje += elemento.nombre + " ";
                    })
                    swal.fire({
                        title: mensaje
                    })
                } else if (result.isDenied) {
                    let mensaje = "";

                    TablaPeriodioca.forEach((elemento) => {
                        mensaje += elemento.simbolo + " ";
                    })
                    swal.fire({
                        title: mensaje
                    })
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    let mensaje = "";

                    TablaPeriodioca.forEach((elemento) => {
                        mensaje += elemento.z + " ";
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
            text: "Es mejor ir lento, pero seguro. Esta caja debe abrirse con un candado, aunque no lo CREAS, la llave existe",
        })

    }
}

//FUNCIONES SOBRE LA PUERTA//
PuertaSalida.addEventListener("click", btnSalida);
function btnSalida() {
    (async () => {
       const {value: password} = await Swal.fire({
            text: "Cual es el código de salida " + Personaje[0].nombre,
            input: "password",
            inputPlaceholder: "password",
            inputLabel: "Código"
    
       })
        password === "795438" ? findejuego() : swal.fire({
            text: "Código ingresado incorrecto",
            icon: "error"
        });
    
})()
}

function findejuego() {
    Swal.fire({
text: "Felicidades completaste el juego",
icon: "success"
    })
    MostrarContenido.style.display = "none";
    RegistrarNombre.style.display = "none"
    h2title.style.display = "none"
    TablaPeriodiocaImg.style.display = "none"
    Score.style.display = "block"
    almacenarResultados();
cargarResultados();
clearInterval(intervaloContador)
}


    
    function almacenarResultados() {
        const duracion = Duration.fromObject({ seconds: tiempoRestante });
        const tiempoFormateado = duracion.toFormat("m:ss");
        const resultadosAnteriores = JSON.parse(localStorage.getItem("resultados") || "[]");
        resultadosAnteriores.push({ nombre: Personaje[0].nombre, tiempo: tiempoFormateado}); 
        localStorage.setItem("resultados", JSON.stringify(resultadosAnteriores));
    }

        function cargarResultados() {
        const tablaResultados = document.getElementById("TablaResultadoFinal");
        const resultadosAnteriores = JSON.parse(localStorage.getItem("resultados") || "[]");

        resultadosAnteriores.forEach((resultado) => {
            const nuevaFila = document.createElement("tr");

            const columnaNombre = document.createElement("td");
            columnaNombre.textContent = resultado.nombre;

            const columnaTiempo = document.createElement("td");
            columnaTiempo.textContent = resultado.tiempo; 
            // Agrega las columnas a la nueva fila
            nuevaFila.appendChild(columnaNombre);
            nuevaFila.appendChild(columnaTiempo);

            // Agrega la nueva fila al cuerpo de la tabla
            tablaResultados.appendChild(nuevaFila);

            resultadotiempoparse = parseFloat(resultado.tiempo)

            BotonResultado.style.display = "block";
            BotonResultado.addEventListener("click", btnResultado)
            function btnResultado(){
                fetch(`./javascript/resultados.json`)
                .then((response) => {
                    if(response.ok){
                        return response.json()
                    }else{
                        throw new Error ("Hubo un error en el servidor");
                    }
                }).then((resultados) =>{
                    if(resultadotiempoparse >= "8"){
                        swal.fire({
                            text: resultados[0].Resultado
                        })
                    }else{
                        if(resultadotiempoparse >= 6 && resultadotiempoparse <8){
                            swal.fire({
                                text: resultados[1].Resultado
                            })
                        }else{
                            if(resultadotiempoparse >= 4 && resultadotiempoparse <6){
                                swal.fire({
                                    text: resultados[2].Resultado
                                }) 
                            }else{
                                if(resultadotiempoparse >=2 && resultadotiempoparse <4){
                                    swal.fire({
                                        text: resultados[3].Resultado
                                    })
                                }else{
                                    swal.fire({
                                        text: resultados[4].Resultado
                                    })
                                }
                            }
                        }
                    }
                }).catch((error) => 
                swal.fire({
                    text: error
                }))
            }
        });

       


    }

    
    






