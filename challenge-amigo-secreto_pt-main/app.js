//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let sorteados = [];

// Adiciona nome na lista
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

// Mostra a lista de nomes na tela
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Sorteia sem repetir
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione nomes primeiro!");
        return;
    }

    // Verifica se já sorteou todos
    if (sorteados.length === amigos.length) {
        alert("Todos os amigos já foram sorteados! ");
        sorteados = [];
        document.getElementById("resultado").innerHTML = "";
        return;
    }

    let sorteado;

    // Garante que não repita
    do {
        sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    } while (sorteados.includes(sorteado));

    sorteados.push(sorteado);

    const resultado = document.getElementById("resultado");
    const li = document.createElement("li");
    li.textContent = `🎉 ${sorteado}`;
    resultado.appendChild(li);
}
