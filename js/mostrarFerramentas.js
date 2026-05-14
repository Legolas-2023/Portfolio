import { conectaFerramentas } from "./conectaAPI.js";

const listaF = document.querySelector('[data-ferramentas]')

function constroiCardFerramentas(nome, imagem){
    const cardsFerramentas = document.createElement('figure');
    cardsFerramentas.className = "figura-imagens";
    cardsFerramentas.classList.add("group", "bg-color3", "p-5", "shadow-xl", "shadow-color6", "transition", "duration-500", "ease-in-out", "text-[1rem]", "font-dmSans", "cursor-pointer", "rounded-tl-[50px]", "rounded-br-[50px]", "w-[35vw]","md:w-[20vw]","lg:w-[15vw]","mx-auto", "text-center", "justify-center", "items-center", "flex", "flex-col", "hover:scale-125");
    cardsFerramentas.innerHTML = ` 
        <p class="group-hover:text-color5 group-hover:contrast-[600%] text-color4">${nome}</p>
        <img src="${imagem}" class="group-hover:text-color5 group-hover:contrast-[600%] w-[15vw] md:w-[10vw] lg:w-[5vw]" alt="${nome}">`

    return cardsFerramentas
}

async function listaFerramentas(){
    const listaApiFerramentas = await conectaFerramentas.Ferramentas();
    listaApiFerramentas.forEach(elemento => listaF.appendChild(
    constroiCardFerramentas(elemento.nome, elemento.imagem)));
}

listaFerramentas()