alert("Bienvenido a la Sala de Escape El laboratorio del Prof. Fede");
alert("En esta sala pondremos a prueba tu habilidades para escapar, pero primero creemos tu personaje");

function Personaje(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

function Objeto(nombre, caracteristica) {
    this.nombre = nombre;
    this.caracteristica = caracteristica;
}

const inventario = [];

const Persona = new Personaje(prompt("Cual es tu nombre"), prompt("¿Cual es tu apellido"), prompt("¿Cuántos años tienes?"));

alert("Preparate para jugar " + Persona.nombre + " " + Persona.apellido);

let opcion;
let continuar;

alert("Acabas de ingresar al Laboratorio")
do {
    opcion = parseFloat(prompt(Persona.nombre + " ¿Que deseas inspeccionar? 1- Mesada, 2- Bata de Laboratorio"));

    if (opcion === 1) {
        do {
            let opcion1
            opcion1 = parseFloat(prompt("Alumno " + Persona.apellido + " Frente a ti hay dos objetos. ¿Cual deseas recoger y revisar primero? 1-bloque de metal, 2-Mechero de Bunsen"));


            if (opcion1 === 1) {

                const metal = new Objeto("Bloque de metal", "Puede ser fundido con calor");
                alert("Recogiste " + metal.nombre + " y sirve porque " + metal.caracteristica);
                inventario.push(metal);
            } else {
                if (opcion1 === 2) {
                    const bunsen = new Objeto("Mechero de Bunsen", "Se usa para calentar objetos");
                    alert("Recogiste " + bunsen.nombre + " y sirve porque " + bunsen.caracteristica);
                    inventario.push(bunsen);
                } else {
                    alert("Opcion seleccionada incorrecta");
                }
            }
            continuar = prompt("¿Deseas recoger otro objeto? si/no");
        } while (continuar === "si") {
            alert("Finalizada la investigación en la mesada");
        }

    } else {
        if (opcion === 2) {
            do {
                let opcion2
                opcion2 = parseFloat(prompt("Bien estudiante " + Persona.apellido + " En el bolsillo de la bata encontraste dos objetos. ¿Cual deseas recoger y revisar primero? 1-Mensaje en papel, 2-Molde de llave"));


                if (opcion2 === 1) {

                    const mensaje = new Objeto("Papel con mensaje", "tiene un mensaje de socorro para leer: AuXeLiO");
                    alert("Recogiste " + mensaje.nombre + " y sirve porque " + mensaje.caracteristica);
                    inventario.push(mensaje);
                } else {
                    if (opcion2 === 2) {
                        const molde = new Objeto("Molde de llave", "podrías crear una llave con metal fundido");
                        alert("Recogiste " + molde.nombre + " y sirve porque " + molde.caracteristica);
                        inventario.push(molde);
                    } else {
                        alert("Opcion seleccionada incorrecta");
                    }
                }
                continuar = prompt("¿Deseas recoger otro objeto? si/no");
            } while (continuar === "si") {
                alert("Finalizada la investigación en la bata");
            }
        } else {
            alert("Opción seleccionada incorrecta");
        }

    }
    if (inventario.length === 4) {
        alert("Ya tienes completo tu inventario, puedes continuar")
    } else {
        alert("Sigue investigando hasta que tengas los cuatro objetos")
    }
    continuar = prompt("¿Deseas inspeccionar en otro lado? si/no");
} while (continuar === "si") {
    alert("Investigación finalizada");
};


inventario.forEach((elemento) => alert("En tu inventario tienes " + elemento.nombre));
if(inventario.length < 4){
    alert("No recogiste todos los elementos. Perdiste")
}else{
alert(Persona.nombre + ", se prendió una luz que ilumina una caja con un candado. No tienes la llave, pero fundiendo el bloque de Metal, en el molde y con el calor de mechero Bunsen la fabricaste.");

alert("La llave abre el candado y dentro encuentras una Tabla Periódica")

const TablaPeriodioca = [{ nombre: "Oro", simbolo: "Au", z: 79 }, { nombre: "Xenón", simbolo: "Xe", z: 54 }, { nombre: "Litio", simbolo: "Li", z: 3 }, { nombre: "Oxígeno", simbolo: "O", z: 8 }];

let mirar;
do {
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
    continuar = prompt("¿Desea observar otro parámetro de la tabla? si/no")
} while (continuar === "si") {
}

let salida;
salida = parseFloat(prompt("¿Cual es el código de salida joven " + Persona.apellido + "?"));

if (salida === 795438) {
    alert("Felicidades! Escapaste de la sala!" + Persona.nombre + Persona.apellido);
} else {
    alert("Perdiste")
}
}

