const teste = document.querySelector('nav#navegacao');
const valor = document.querySelectorAll('a');

function navabre(){
    teste.style.display = 'block';
}

function navfecha(){
    teste.style.display = 'none';
}


var div = document.querySelector('#oi');
var texto = document.querySelector('#titulo');

function escrever(str, el) {
  var char = str.split('').reverse();
  var typer = setInterval(function() {
    if (!char.length) return clearInterval(typer);
    var next = char.pop();
    el.innerHTML += next;
  }, 100);
}

escrever(texto, div);