const texto = document.querySelector("#p_nome")

let frase = `Olá, \n
me chamo Crystian`;



for (let i = 0; i < frase.length; i++) {
    setTimeout(() => {
       texto.innerHTML += frase[i]
    }, i * 50);
}