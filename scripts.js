alert('Ta funcionando')

let todosQuizzes = [];
let ulQuizzes =[];


function buscarQuizzes(){
    let todosQuizzes = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
    todosQuizzes.then(renderizarQuizz);
    todosQuizzes.catch(tratarErro);
    alert('Tá indo')
      
}
buscarQuizzes()

function identificarQuizz(resposta){
    todosQuizzes = []
    const todosQuizzes = resposta.data
}


function renderizarQuizz(resposta){
    alert('Tamo indo')
    console.log(resposta)
    let ulQuizzes = document.querySelector('p-listaQuizzOutros');
    ulQuizzes = resposta.data
      

    for(i = 0; i < ulQuizzes.lenght; i++ ){
        ulQuizzes.innerHTML += `<li class="p-Quizz"> 
    <div class="p-divQuizz">    
    <span class="tituloQuizz">${ulQuizzes.tittle[i]}</span>
    <img src="${ulQuizzes.image[i]}" class="imagemQuizz"></div></li>`
    
    // onclick="selecionarQuizz"()"
    }
    // ${ulQuizzOutros.id[i]}


}
function obterUnicoQuizz(){
let requisição = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${ulQuizzes.id}');
requisição.then(renderizarQuizzSelecionado)
}

function renderizarQuizzSelecionado(){
    let pagina1 = document.querySelector('.pagina1')
    let pagina2 = document.querySelector('.pagina2')
    pagina1.classList.add('p-hidden')
    pagina2.classList.remove('p-hidden')
}


function selecionarQuizz(){
   let quizz = document.querySelector('.p-Quizz')

}

function criarQuizz(){
    let pagina1 = document.querySelector('.pagina1')
    let pagina3 = document.querySelector('.pagina3')
    pagina1.classList.add('p-hidden')
    pagina3.classList.remove('p-hidden')
}

function tratarErro(erro){
    const statusCode = erro.response.status;
    console.log(statusCode);
}

// function checarMeuQuizz(){
//     for (i = 0; i < ul.lenght; i++){
//         if(i >= 1){
//           let divSemQuizz =  document.QuerySelector(".p-semQuizz");
//           let divComSeuQUizz = document.QuerySelector("p-divComSeuQUizz ")
//           divSemQuizz.classList.add("p-hidden")
//           divComSeuQUizz.classList.remove("p-hidden")
//         }
//     }
// }
// checarMeuQuizz();
