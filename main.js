alert('ola, seja bem vindo!')

let nomeUsuario = '';
let texto = document.querySelector('span');

texto.textContent = nomeUsuario;
while (nomeUsuario == ''){
   nomeUsuario = prompt('qual o seu nome?');
}