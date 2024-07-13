async function Ferramentas(){
    const conexaoFerramentas = await fetch('https://api.npoint.io/f4ec95e3268dec36d2d8/Ferramentas');
    const conexaoConvertidaFerramentas = await conexaoFerramentas.json();
    return conexaoConvertidaFerramentas
}

export const conectaFerramentas = {
    Ferramentas
}

//============================================================//

async function Projetos(){
    const conexaoProjetos = await fetch('https://api.npoint.io/f4ec95e3268dec36d2d8/Projetos');
    const conexaoConvertidaProjetos = await conexaoProjetos.json();
    return conexaoConvertidaProjetos
}

export const conectaProjetos = {
    Projetos
}