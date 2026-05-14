import { conectaProjetos } from "./conectaAPI.js";

const listaP = document.querySelector('[data-projetos]')

function constroiCardProjetos(titulo, imagem, link){
    const cardsProjetos = document.createElement('figure');
    cardsProjetos.className = "projects-imagens-screen";
    cardsProjetos.classList.add("relative","group")
    cardsProjetos.innerHTML = ` <img src="${imagem}" class="screen rounded-[20px] shadow shadow-color6 brightness-[100%] w-[90vw] mx-auto group-hover:brightness-[20%] group-hover:transition group-hover:duration-700 group-hover:ease-in-out group-hover:scale-105" alt="teste">
                                <figcaption class="captiontext opacity-0 absolute inset-0 flex flex-col items-center justify-center transition duration-500 text-color5 text-[1.25rem] group-hover:opacity-100 cursor-pointer">
                                    <h4 id="T_Projetos" class="text-[1.25rem]">${titulo}</h4>
                                    <a href="${link}" id="BT-Link" class="border border-color4 rounded-[10px] py-[10px] px-5 transition duration-500 ease-in-out hover:border-color5 hover:bg-color3 hover:text-color5" target="_blank">Ver Projeto</a>
                                </figcaption>`

    return cardsProjetos
}

async function listaProjetos(){
    const listaApiProjetos = await conectaProjetos.Projetos();
    listaApiProjetos.forEach(element => listaP.appendChild(
    constroiCardProjetos(element.titulo, element.imagem, element.link)));
}

listaProjetos()