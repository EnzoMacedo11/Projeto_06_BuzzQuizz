function finalizadorFormulario(){
    const buttonoff = document.querySelector('.e-formulario');
    const butoonon = document.querySelector('.e-criarPerguntas');
    buttonoff.classList.add("hidden");
    butoonon.classList.remove("hidden");
    numeroDePerguntas()

}

function finalizadorPerguntas(){
    const buttonoff = document.querySelector('.e-criarPerguntas');
    const butoonon = document.querySelector('.e-criarNiveis');
    buttonoff.classList.add("hidden");
    butoonon.classList.remove("hidden");

}

function finalizadorQuizz(){
    const buttonoff = document.querySelector('.e-criarNiveis');
    const butoonon = document.querySelector('.e-finalizador');
    buttonoff.classList.add("hidden");
    butoonon.classList.remove("hidden");

}
function retornarFormulario(){
    const buttonoff = document.querySelector('.e-finalizador');
    //const butoonon = document.querySelector('.e-formulario');
    buttonoff.classList.add("hidden");
    //butoonon.classList.remove("hidden");
}

function numeroDePerguntas(){
    const nperguntas = document.getElementById(".e-inputQuantidadePergunta");
    const ul = document.querySelector(".e-criarPerguntas");
    ul.innerHTML = "";
  
    for (let i = 0; i < nperguntas; i++) {
      ul.innerHTML += `<li>
      
      <div class="e-pergunta${i}">
      <h1 class="e-titulo2">Pergunta 1</h1>
      <input class="e-inputTextoPergunta" type="text" placeholder="Texto da pergunta" />
      <input class="e-inputCorPergunta" type="text" placeholder="Cor de fundo da pergunta" />
      <h2 class="e-titulo2">Resposta Correta</h2>
      <input class="e-inputResposta" type="text" placeholder="Resposta correta" />
      <input class="e-inputUrlImagemResposta" type="url" placeholder="URL da imagem" />
      <h2 class="e-titulo2">Respostas Incorretas</h2>
      <input class="e-inputIncorreta1" type="text" placeholder="Resposta incorreta 1" />
      <input class="e-inputUrlImagemIncorreta1" type="url" placeholder="URL da imagem 1" />
      <input class="e-inputIncorreta2" type="text" placeholder="Resposta incorreta 2" />
      <input class="e-inputUrlImagemIncorreta2" type="url" placeholder="URL da imagem 2" />
      <input class="e-inputIncorreta3" type="text" placeholder="Resposta incorreta 3" />
      <input class="e-inputUrlImagemIncorreta3" type="url" placeholder="URL da imagem 3" />
    </div>
  
          </li>`;
    }
  }
  