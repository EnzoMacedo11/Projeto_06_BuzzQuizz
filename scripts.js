function checarMeuQuizz(){
    for (i = 0; i < ul.lenght; i++){
        if(i >= 1){
          let divSemQuizz =  document.QuerySelector(".p-semQuizz");
          let divComSeuQUizz = document.QuerySelector("p-divComSeuQUizz ")
          divSemQuizz.classList.add("p-hidden")
          divComSeuQUizz.classList.remove("p-hidden")
        }
    }
}
checarMeuQuizz();

let todosQuizzes = {};

function buscarQuizzes(){
    let todosQuizzes = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
    todosQuizzes.then(renderizarQuizzes);
    todosQuizzes.catch(tratarErro);
      
}

buscarQuizzes();

function renderizarQuizzes(response){
    const ulQuizzOutros = document.QuerySelector('p-listaQuizzOutros');
    ulQuizzOutros.innerHTML = '';
    for(j = 0; j < response.data.lenght; j++ ){
    ulQuizzOutros.innerHTML += `<li class="p-Quizz" onclick="selecionarQuizz()"> 
        <span class="tituloQuizz">${response.data.tittle[j]}</span>
        <img src="${response.data.image[j]}>" </li>`
    }


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