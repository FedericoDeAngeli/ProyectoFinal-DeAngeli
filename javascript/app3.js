// const persona1 = {Nombre : " Fede ", Apellido : " De Angeli ", Edad : " 32 ", DNI: " 34910669 "};
// const persona2 = {Nombre: " María Ana ", Apellido: " Demagistri ", Edad: " 30 ", DNI: " 37132192 "};

// console.log (persona1.Nombre);
// console.log (persona2.Edad);
// console.log(persona1.Nombre + persona1.Apellido + "está casado y ama a " + persona2.Nombre + persona2.Apellido);

// persona2.Edad = "35";
// console.log (persona2.Edad);

// function Persona (nombre, apellido, edad){
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.anos = edad;
// }

// const Fede = new Persona("Fede", "De Angeli", 32);
// const Maria = new Persona("María Ana", "Demagistri", 30);

// console.log(Fede.nombre + " ama a " + Maria.nombre);

// let suma = Fede.anos + Maria.anos;

// console.log (suma);

// const alguien = new Persona(prompt("nombre"), prompt("apellido"), prompt("edad"));

// console.log ("El nombre es " + alguien.nombre + " " + alguien.apellido + " y su edad es " + alguien.anos);


class Persona{
    constructor (nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.anos = edad;
}

hablar(){
    console.log("Hola me llamo " + this.nombre + " " + this.apellido + " y mi edad es " + this.anos);
}
}

const alguien = new Persona(prompt("nombre"), prompt("apellido"), prompt("edad"));
alguien.hablar();

const alguien2 = new Persona(prompt("nombre"), prompt("apellido"), prompt("edad"));
alguien2.hablar();

alert(alguien.nombre + " ama a " + alguien2.nombre);
