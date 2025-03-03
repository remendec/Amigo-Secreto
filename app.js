// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
const maxAmigos = 5;

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const listaElementos = document.getElementById("listaAmigos");
    const botonAgregar = document.querySelector(".button-add");
    
    if (nombre === "" || !isNaN(nombre)) {
        alert("Por favor ingrese un nombre válido");
        return;
    }
    
    if (listaAmigos.length < maxAmigos) {
        listaAmigos.push(nombre);
        
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = nombre;
        listaElementos.appendChild(nuevoElemento);
        
        input.value = "";
    }
    
    if (listaAmigos.length === maxAmigos) {
        botonAgregar.disabled = true;
    }
}

function sortearAmigo() {
    if (listaAmigos.length < maxAmigos) {
        alert("Debe ingresar 5 nombres antes de sortear");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSeleccionado = listaAmigos[indiceAleatorio];
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = `<li>🎉 ¡El amigo secreto es: ${amigoSeleccionado}! 🎉</li>`;
    
    // Reiniciar el juego
    listaAmigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.querySelector(".button-add").disabled = false;
}
