const Player1 = document.getElementById("player");
const Tiempo1 = document.getElementById("score");



BotonResultado.addEventListener("click", btnResultado)

function btnResultado(){
    const UsuarioTiempo = new resultadoFinal(Player1.value, Tiempo1.value);
   localStorage.setItem("name", UsuarioTiempo);

}
