

let todosQuizzes = [];
let ulQuizzes =[];
let ulMeuQuizz =[];

function buscarQuizzes(){
    let todosQuizzes = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
    todosQuizzes.then(renderizarQuizz);
    todosQuizzes.catch(tratarErro);
    
      
}
buscarQuizzes()

function renderizarQuizz(resposta) {
    console.log(resposta);
    let ulQuizzesDom = document.querySelector('.p-listaQuizzOutros');
    let ulMeuQuizzDom = document.querySelector(".p-listaMeuQuizz");
    const todosQuizzes = resposta.data;
    console.table(todosQuizzes);
    for (i = 0; i < todosQuizzes.length; i++) {
            ulQuizzesDom.innerHTML += `<li onclick="selecionarQuizz()" class="p-Quizz">
            <div class="p-divQuizz">
            <div class="p-gradiente"> 
            <span class="tituloQuizz">${todosQuizzes[i].title}</span>
            <img src="${todosQuizzes[i].image}" class="imagemQuizz"></div></div></li>`;
        }  if (todosQuizzes.id = localStorage.get()) {
                ulMeuQuizzDom.innerHTML += `<li onclick="selecionarQuizz"class="p-Quizz"> 
                <div class="p-divQuizz">
                <span class="tituloQuizz">${todosQuizzes.title[i]}</span>
                <img src="${todosQuizzes.image[i]}" class="imagemQuizz"></div></li>`;
            } else {}

    }
     
function obterUnicoQuizz(){
let requisição = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/data.id');
requisição.then(renderizarQuizzSelecionado);
}

function renderizarQuizzSelecionado(){
    let pagina1 = document.querySelector('.pagina1');
    let pagina2 = document.querySelector('.pagina2');
    pagina1.classList.add('p-hidden');
    pagina2.classList.remove('p-hidden');
}

function selecionarQuizz(){
   let quizz = document.querySelector('.p-Quizz');
   renderizarQuizzSelecionado()
   
}

function criarQuizz(){
    let pagina1 = document.querySelector('.pagina1');
    let pagina3 = document.querySelector('.pagina3');
    pagina1.classList.add('.p-hidden');
    pagina3.classList.remove('.p-hidden');
}

function tratarErro(erro){
    const statusCode = erro.response.status;
    console.log(statusCode);
}

function checarMeuQuizz(){
    const ul = document.querySelector('.p-listaMeuQuizz')
    for (i = 0; i < ul.length; i++){
        if(i >= 1){
          let divSemQuizz =  document.QuerySelector(".p-semQuizz");
          let divComSeuQUizz = document.QuerySelector("p-divComSeuQUizz ");
          divSemQuizz.classList.add("p-hidden");
          divComSeuQUizz.classList.remove("p-hidden");
        }
    }
}
checarMeuQuizz();

function voltarPagina1(){
    let pagina1 = document.querySelector('.pagina1');
    let pagina3 = document.querySelector('.pagina3');
    pagina1.classList.remove('.p-hidden');
    pagina3.classList.add('.p-hidden');
}