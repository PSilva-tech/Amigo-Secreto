
// Array que vai armazenar os amigos
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // Captura o valor inserido no campo de texto
    let nome = document.getElementById('amigo').value; 

    // Verifica se o nome está vazio
    if (nome === '') {
        alert('Por favor, insira um nome.');
    } else {
        // Adiciona o nome ao array de amigos
        amigos.push(nome);

        // Atualiza a lista exibida na tela
        atualizarListaAmigos();

        // Limpa o campo de entrada
        document.getElementById('amigo').value = '';
    }
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';  // Limpa a lista existente

    // Percorre o array de amigos e adiciona um <li> para cada amigo
    amigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear o amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Por favor, adicione pelo menos 2 amigos para sortear.');
        return;
    }

    // Embaralha a lista de amigos para o sorteio
    let sorteados = [...amigos]; // Copia o array de amigos
    sorteados.sort(() => Math.random() - 0.5); // Embaralha o array

    // Cria a lista de resultados
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa o conteúdo anterior

    for (let i = 0; i < sorteados.length; i++) {
        let li = document.createElement('li');
        li.textContent = `${sorteados[i]} sorteou ${sorteados[(i + 1) % sorteados.length]}`; // Cada um sorteia o próximo
        resultado.appendChild(li);
    }
}

