var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

var campoPalpite = document.querySelector('.campoPalpite');
var enviarPalpite = document.querySelector('.enviarPalpite');

var palpitesAnteriores = document.querySelector('.palpitesAnteriores');
var resultado = document.querySelector('.resultado')
var baixoOuAlto = document.querySelector('.baixouOuAlto');

var contagemDePalpites = 1;
var botaoReinicio = document.querySelector('.botaoReinicio');
var boxTentativas = document.querySelector('.tentativas-restantes')
var tentativasRestantes = 10;
botaoReinicio.style.display = 'none';


console.log("Hello World!");


function conferirPalpite() {
  var palpiteUsuario = Number(campoPalpite.value);
  
  if(palpiteUsuario === numeroAleatorio) {
    resultado.textContent = '!!!FIM DE JOGO!!!';
    baixoOuAlto.textContent = 'Parabéns você acertou';
    
    resultado.style.backgroundColor = 'green';
    
    configFimDeJogo();
  } else if(contagemDePalpites < 10){
    if(palpiteUsuario < numeroAleatorio) {
      palpitesAnteriores.textContent += ` ${palpiteUsuario}`;
      resultado.textContent = 'ERRADO!!!';
      baixoOuAlto.textContent = 'Seu palpite foi muito baixo.';
      
      resultado.style.backgroundColor = 'red';
      resultado.style.color = 'white';
    } else if(palpiteUsuario > numeroAleatorio) {
      palpitesAnteriores.textContent += ` ${palpiteUsuario}`;
      resultado.textContent = 'ERRADO!!!';
      baixoOuAlto.textContent = 'Seu palpite foi muito alto.';
      
      resultado.style.backgroundColor = 'red';
      resultado.style.color = 'white';
    }
    campoPalpite.value = '';
    contagemDePalpites++;
  } else {
    campoPalpite.value = ''
    palpitesAnteriores.textContent += ` ${palpiteUsuario}`;
    resultado.textContent = '!!!FIM DE JOGO!!!';
    baixoOuAlto.textContent = 'Número de tentativas esgotadas.';
    
    resultado.style.backgroundColor = 'red';
    resultado.style.color = 'white';
    
    configFimDeJogo();
  }

  if (palpiteUsuario === NaN) {

  }
  
  
  function configFimDeJogo() {
    campoPalpite.disabled = true;
    enviarPalpite.disabled = true;
    
    botaoReinicio.style.display = 'inherit';
    contagemDePalpites = 1;
  }
  
  tentativasRestantes--;
  boxTentativas.textContent = tentativasRestantes;
  campoPalpite.focus()
}
  boxTentativas.textContent = tentativasRestantes;

function novoJogo() {
  campoPalpite.value = '';
  palpitesAnteriores.textContent = '';
  resultado.textContent = '';
  baixoOuAlto.textContent = '';
  
  campoPalpite.disabled = false;
  enviarPalpite.disabled = false;
  botaoReinicio.style.display = 'none';

  tentativasRestantes = 10;
  boxTentativas.textContent = tentativasRestantes;

  var numeroAleatorio = Math.floor(Math.ramdom() * 100) + 1;
}
botaoReinicio.addEventListener('click', novoJogo);
enviarPalpite.addEventListener('click', conferirPalpite);
campoPalpite.addEventListener('keyup13', conferirPalpite);