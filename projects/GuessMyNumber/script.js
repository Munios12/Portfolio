'use strict';
//.queryselector es un metodo para utilizar en document y en los parentesis ponemos como string el elemento que queremos coger como si fuera en css. Id: . CLASS: #. La primera parte selecciona el elemento y con textcontent podemos leer las propiedades del elemento

//console.log(document.querySelector('.message').textContent);

//DOM : Document object model: Representacion estructurada de un elemento html. Permite a JS acceder a los elementos del html y estilos (css) para manipularlos. Podremos cambiar el texto, atributos de html y estilos de css. EL DOM es el punto de conexion entre un documento de html y JS. DOM Manipulation no es lo mismo ni forma parte de Javascript. DOM forman parte de las WEB API's (Application Programming Interface) y estas pueden interaccionar con Js.
/*
document.querySelector('.message').textContent = '🎉🎉Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//HANDLING CLICK EVENTS

//Un evento es algo que succede en la pagina, un click del mouse, un movimiento del mouse o presionar una tecla del teclado.

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 10;
let highscore = 0;

const displayMessage = (message) => {
  document.querySelector('.message').textContent = message
}


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number ! 🤢';
    displayMessage('No Number ! 🤢')

    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;

    // document.querySelector('.message').textContent = '🎉Correct Number!🎉';

    displayMessage('🎉Correct Number!🎉')

    document.querySelector('body').style.backgroundColor = '#3CB371';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    

    //When guess is wrong
  } else if (guess !== secretNumber) {

    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high ! ' : '📉 Too low ! ';

      displayMessage(guess > secretNumber ? '📈 Too high ! ' : '📉 Too low ! ')

      score--;

      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent =
      //   '💥You lost the game. Try again !💥';

      displayMessage('💥You lost the game. Try again !💥');

      document.querySelector('.score').textContent = 0;
    }


  }


});

  //When guess is too high
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high ! ';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       '💥You lost the game. Try again !💥';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low ! ';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       '💥You lost the game. Try again ! 💥';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }


document.querySelector('.again').addEventListener('click', function () {
  score = 10;

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...')

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.number').style.width = '15rem';
});

//Primero selecciona el elemento con el que queremos interaccionar que en este caso es el boton de 'check'. Esto lo hace como antes con query selector y etre parentesis seleccionamos el elesmento. Para añadir una lista de eventos utilizamos la funcion (AddEventListener), al igual que antes, entre parentesis seleccionamos, 1º como interaccionaremos (click, pasar mouse, etc) y 2º que queremos que haga. Elegimos una funcion porque, las funciones devuelven un valor y por tanto podemos tener funciones dentro de funciones. El output de esta, nos retornada el valor que hemos introducido en la box (.guess) gracias al (.value).

//Dentro de la funcion que hemos creado para devolvernos el valor del box, podemos añadir un query selector para modificar el texto [document.querySelector('.message').textContent = '🎉🎉Correct Number!';]

//Cuando nos devuelven algo desde una interfaz, lo suelen hacer en forma de string, si hacemos typeof de la constante guess, veremos que es una string.

//IMPLEMENTING GAME LOGIC

//REFACTORING

//Cuando por ejemplo tenemos codigo repetido como en elc aso de ( document.querySelector('.message').textContent) siempre podemos hacer funciones para llamar a este codigo.