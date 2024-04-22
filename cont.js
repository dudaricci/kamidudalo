const botoes = document.querySelectorAll('.objetivos');
const textos = document.querySelectorAll('.aba-conteudo');
// botoes.length


for(let i =0; i < botoes.length; i++ ){
 botoes[i].onclick = function(){
    for(let j =0; j < botoes.length; j++ ){
        botoes[j].classList.remove('ativo');
  textos[j].classList.remove('ativa')
    }
botoes[i].classList.add('ativo');
textos[i].classList.add('ativa');
}

//botoes[i].classList.remove('ativo')
}

const contadores = document.querySelectorAll('.contador');
const tempoObjetivo1 = new Date('2024-04-16T00:00:00');

let tempoAtual = new Date();
let tempoFinal = tempoObjetivo1 - tempoAtual;
let segundos = Math.floor( tempoFinal/1000);
let minutos = Math.floor(minutos/60);
let dias = Math.floor(horas/24);

contadores[0].textContent = dias + ' dias ' + horas + ' horas ' + minutos + " minutos " + segundos + " segundos "