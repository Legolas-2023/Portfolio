import { conectaFerramentas } from "./conectaAPI.js";

const listaF = document.querySelector('[data-ferramentas]')

function constroiCardFerramentas(nome, imagem){
    const cardsFerramentas = document.createElement('figure');
    cardsFerramentas.className = "figura-imagens";
    cardsFerramentas.innerHTML = ` 
        <p>${nome}</p>
        <img src="${imagem}" alt="${nome}">`

    return cardsFerramentas
}

async function listaFerramentas(){
    const listaApiFerramentas = await conectaFerramentas.Ferramentas();
    listaApiFerramentas.forEach(elemento => listaF.appendChild(
    constroiCardFerramentas(elemento.nome, elemento.imagem)));
}

listaFerramentas()