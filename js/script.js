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
