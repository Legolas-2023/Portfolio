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
let indicador = document.querySelector('.indicador')
let aparecerSL = document.querySelector('#aparecerLuaSol')
let imagemIntroducao = document.querySelector('.introducao');
let secaoSobre = document.querySelector('#group');

let botaoContato = document.querySelector('#enter-contato');

btn.addEventListener('click', (el) =>{
  let light = indicador.classList.toggle('indicadorSol')
  aparecerSL.classList.toggle('bi-sun-fill')
  imagemIntroducao.classList.toggle('introducao_light')

  if(light){
    document.body.style.backgroundColor = 'var(--color5)'
    secaoSobre.style.color = 'var(--color1)'
    botaoContato.style.color = 'var(--color1)'
  }else{
    document.body.style.backgroundColor = 'var(--color1)'
    secaoSobre.style.color = 'var(--color4)'
    botaoContato.style.color ='var(--color5)'
  }
})

