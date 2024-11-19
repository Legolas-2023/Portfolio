import { conectaProjetos } from "./conectaAPI.js";

const listaP = document.querySelector('[data-projetos]')

function constroiCardProjetos(titulo, imagem, link){
    const cardsProjetos = document.createElement('figure');
    cardsProjetos.className = "projects-imagens-screen";
    cardsProjetos.innerHTML = ` <img src="${imagem}" class="screen" alt="teste">
                                <figcaption class="captiontext">
                                    <h4 id="T_Projetos">${titulo}</h4>
                                    <a href="${link}" id="BT-Link" target="_blank" >Ver Projeto</a>
                                </figcaption>`

    return cardsProjetos
}

async function listaProjetos(){
    const listaApiProjetos = await conectaProjetos.Projetos();
    listaApiProjetos.forEach(element => listaP.appendChild(
    constroiCardProjetos(element.titulo, element.imagem, element.link)));
}

listaProjetos()
