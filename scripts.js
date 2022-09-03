alert('Ta funcionando')

let todosQuizzes = [];

buscarQuizzes()
function buscarQuizzes(){
    let todosQuizzes = axios.get("https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes");
    todosQuizzes.then(renderizarQuizz);
    todosQuizzes.catch(tratarErro);
    alert('Tá indo')
      
}



// function identificarQuizz(resposta){
//     todosQuizzes = []
//     const todosQuizzes = resposta.data
// }


// const meuQuizz = quizzesServidor.filter(identificarQuizz);

function renderizarQuizz(quizz){
    alert('Tamo indo')
    console.log(quizz)
//     ulQuizzOutros = '';
//     ulQuizzOutros = quizz.data;
   
//     let ulQuizzOutros = document.QuerySelector('p-listaQuizzOutros');
//     ulQuizzOutros.innerHTML += quizzesServidor;

//     for(i = 0; i < quizz.data.lenght; i++ ){
//     ulQuizzOutros.innerHTML += `<li class="p-Quizz" onclick="selecionarQuizz"(${quizz.data.id[i]})"> 
//         <span class="tituloQuizz">${quizz.data.tittle[i]}</span>
//         <img src="${quizz.data.image[i]}"> </li>`
//     }


// }





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
