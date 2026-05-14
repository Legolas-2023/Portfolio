let navegacao = document.querySelector('nav#navegacao');

function aba_navegacao(identificador, estado, estadoScroll){
  document.getElementById(`${identificador}`).addEventListener('click', naveg => { 
    navegacao.style.display = `${estado}`;
    document.body.style.overflow = `${estadoScroll}`

  });

}
aba_navegacao('navopen', 'block', 'hidden');
aba_navegacao('navclose', 'none', 'visible');


const fecharlink = document.querySelectorAll('li.paginas-navegacao').forEach(linkfechar => linkfechar.addEventListener('click', closelink => {
  navegacao.style.display = 'none';
  document.body.style.overflow = 'visible';
  return closelink
}))

let indicador = document.querySelector('.indicador');
let aparecerSL = document.querySelector('#aparecerLuaSol');

const btn = document.querySelector('.trilho').addEventListener('click', (el) =>{
  let light = indicador.classList.toggle('indicadorSol');
  document.documentElement.classList.toggle('dark');
  aparecerSL.classList.toggle('bi-sun-fill');
})