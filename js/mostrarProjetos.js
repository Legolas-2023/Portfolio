import { conectaProjetos } from "./conectaAPI.js";

const listaP = document.querySelector('[data-projetos]')

function constroiCardProjetos(titulo, imagem, link){
    const cardsProjetos = document.createElement('figure');
    cardsProjetos.className = "projects-imagens-screen";
    cardsProjetos.innerHTML = ` <a href="${link}" target="_blank">
                            <img src="${imagem}" class="screen" alt="${titulo}">
                        </a>
                        <figcaption class="captiontext">${titulo}</figcaption>`

    return cardsProjetos
}

async function listaProjetos(){
    const listaApiProjetos = await conectaProjetos.Projetos();
    listaApiProjetos.forEach(element => listaP.appendChild(
    constroiCardProjetos(element.titulo, element.imagem, element.link)));
}

listaProjetos()