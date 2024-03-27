alert('ola, seja bem vindo!')

let nomeUsuario = '';
let texto = document.querySelector('span');

while (nomeUsuario == ''){
   nomeUsuario = prompt('qual o seu nome?');
}

texto.textContent = nomeUsuario;