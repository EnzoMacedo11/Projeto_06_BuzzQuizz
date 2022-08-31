function finalizadorFormulario(){
    const buttonoff = document.querySelector('.e-formulario');
    const butoonon = document.querySelector('.e-criarPerguntas');
    buttonoff.classList.add("hidden");
    butoonon.classList.remove("hidden");

}

function finalizadorPerguntas(){
    const buttonoff = document.querySelector('.e-criarPerguntas');
    const butoonon = document.querySelector('.e-criarNiveis');
    buttonoff.classList.add("hidden");
    butoonon.classList.remove("hidden");

}

function finalizadorQuizz(){
    window.location.reload();
}