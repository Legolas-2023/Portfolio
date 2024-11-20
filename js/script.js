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


const btn = document.querySelector('.trilho')
let indicador = document.querySelector('.indicador');
let aparecerSL = document.querySelector('#aparecerLuaSol');
let imagemIntroducao = document.querySelector('.introducao');
let botaoContato = document.querySelector('.enter-contato');
let secaoSobre = document.querySelector('.group');
let contactCards = document.querySelector('.contact-cards')

btn.addEventListener('click', (el) =>{
  let light = indicador.classList.toggle('indicadorSol')
  aparecerSL.classList.toggle('bi-sun-fill')
  imagemIntroducao.classList.toggle('introducao-light')
  botaoContato.classList.toggle('enter-contato-light')
  secaoSobre.classList.toggle('group-light')
  contactCards.classList.toggle('cards-light')

  if(light){
    document.body.style.backgroundColor = 'var(--color5)'
    
  }else{
    document.body.style.backgroundColor = 'var(--color1)'
  }
})
