let mostrarTexto_btn=document.getElementById("mostrarTexto_btn")
let mostrarTexto=document.getElementById("mostrarTexto")

mostrarTexto_btn.addEventListener('click',alternarTexto)
function alternarTexto(params) {
    mostrarTexto.classList.toggle("mostrar")
    if (mostrarTexto.classList.contains("mostrar")){
        mostrarTexto_btn.innerHTML= "Mostrar menos";
    }
    else{
        mostrarTexto_btn.innerHTML= "Mas informacion"
    }
}