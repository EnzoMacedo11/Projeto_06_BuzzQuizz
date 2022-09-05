//Função Pedro
function criarQuizz(){
    let pagina1 = document.querySelector('.pagina1')
    let pagina3 = document.querySelector('.pagina3')
    pagina1.classList.add('p-hidden')
    pagina3.classList.remove('p-hidden')
}
//////////////////////////////////////////////////////////////////////////////



function finalizadorFormulario(){
    let nperguntas = document.querySelector(".e-inputQuantidadePergunta");
    let qntperguntas = nperguntas.value;
    let nNiveis = document.querySelector(".e-inputQuantidadeNiveis");
    let qntniveis = nNiveis.value
    let nLetrasTitulo = document.querySelector(".e-inputTitulo");
    let qntLetrasTitulo = nLetrasTitulo.length

    if(qntperguntas < 3){
        alert("Devem ter pelo menos 3 perguntas");
        criarQuizz()
    }
    else if(qntniveis < 2){
        alert("Devem ter pelo menos 2 niveis");
        criarQuizz()
    }
    else if(qntLetrasTitulo < 20){
        alert("Devem ter entre 25 até 45 letras");
        criarQuizz()
    }
    else{
    numeroDePerguntas()
    const buttonoff = document.querySelector('.e-formulario');
    const butoonon = document.querySelector('.e-criarPerguntas');
    buttonoff.classList.add("hidden");
    butoonon.classList.remove("hidden");
    }

}

function finalizadorPerguntas(){
    numeroDeNiveis()
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
    ePaginaFinalQuizz()

}
function retornarFormulario(){
    const buttonoff = document.querySelector('.e-finalizador');
    //const butoonon = document.querySelector('.e-PaginaFinalQuizz');
    buttonoff.classList.add("hidden");
    //butoonon.classList.remove("hidden");
}



function numeroDePerguntas() {
    let nperguntas = document.querySelector(".e-inputQuantidadePergunta");
    let qntperguntas = nperguntas.value;

    let ul = document.querySelector(".e-mainPerguntas");
    ul.innerHTML = "";
    for (let i = 0; i < qntperguntas; i++) {
      ul.innerHTML += `<div>
    <div class="e-separadorperguntas${i + 1}">
    <div class="e-pergunta">
        <h1 class="e-titulo2">Pergunta ${i + 1}</h1>
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
    </div>
          </div>`;
    }
    }

  
function numeroDeNiveis(){
    const nNiveis = document.querySelector(".e-inputQuantidadeNiveis");
    const qntniveis = nNiveis.value
    const ul = document.querySelector(".e-mainNiveis");
    ul.innerHTML = "";
  
    for (let i = 0; i < qntniveis; i++) {
      ul.innerHTML += `<div>
      <div class="e-separadorniveis${i + 1}">
      <div class="e-nivel">
      <h1 class="e-titulo2">Nivel ${i + 1}</h1>
      <input class="e-inputTituloNv" type="text" placeholder="Título do nível" />
      <input class="e-inputprctNv" type="text" placeholder="% de acerto mínima" />
      <input class="e-inputTUrlImgNv" type="url" placeholder="URL da imagem do nível" />
      <input class="e-inputDescriçãoNv" type="text" placeholder="Descrição do nível" />
      </div>
      </div>
          </div>`;
    }
  }


function ePaginaFinalQuizz(){
    let imagem = document.querySelector(".e-inputUrl");
    let tituloImagem =  document.querySelector(".e-inputTitulo");
    let trueImagem = imagem.value;
    let trueTituloImagem = tituloImagem.value;
    const ul = document.querySelector(".e-mainImagemFinal");
    let unico = 1 

    for (let i = 0; i < unico; i++) {
      ul.innerHTML += `<div class = "e-EspaçoImagemFinal">
            <img class = "e-ImagemFinal" src = "${trueImagem}">
            <div class = "e-TituloImagemFinal">${trueTituloImagem}</div>
          </div>`;
    
    }
}
