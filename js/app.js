//Variables

const formulario = document.querySelector('#formulario');
const listTweets = document.querySelector('#lista-tweets');
let tweets = [];


//Event Listeners
eventListeners();

function eventListeners(){
    formulario.addEventListener('submit', agregarTweet);


}


//Funciones

function agregarTweet(e) {
    e.preventDefault();
    //console.log('Agregando Tweet')

    //textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;//accedo al valor con .value
    // console.log (tweet);

    //validación para que cuando no escribas nada diga que no puede ir vacío
    if (tweet === ''){
        mostrarError('Un mensaje no puede ir vacío');

        return; // evita que se ejecuten más lineas de código
    }

  

}

function mostrarError (error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;//?????????
    mensajeError.classList.add('error');//class en el css

    //insertarlo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);
    //Eliminar la alerta después de 3 segundos
    setTimeout (() => {
        mensajeError.remove();
    }, 3000); //segundos

}