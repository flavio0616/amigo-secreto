//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let sorteados = [];


function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    amigos.push(nome);
    mostrarLista();
    input.value = "";
}


function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}


function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione nomes primeiro!");
        return;
    }

    
    if (sorteados.length === amigos.length) {
        alert("Todos os amigos já foram sorteados! ");
        sorteados = [];
        document.getElementById("resultado").innerHTML = "";
        return;
    }

    let sorteado;

    
    do {
        sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    } while (sorteados.includes(sorteado));

    sorteados.push(sorteado);

    const resultado = document.getElementById("resultado");
    const li = document.createElement("li");
    li.textContent = `🎉 ${sorteado}`;
    resultado.appendChild(li);
}
