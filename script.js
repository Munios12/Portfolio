'use strict'

const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const buttonOpenModal = document.querySelector('.button_contact');
const buttonCloseModal = document.querySelector('.close_modal')

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

overlay.addEventListener('click', closeModal);
buttonOpenModal.addEventListener('click', openModal);
buttonCloseModal.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {if (e.key === 'Escape' && !modal.classList.contains('hidden')) {closeModal()}})


//----------HAMBURGUER MENU--------

const hamburguer = document.querySelector('.hamburguer-bt');
const projects = document.querySelector('.projects');
const proyectos = document.querySelector('.pig-game')

hamburguer.addEventListener('click', function (e) {
    
    //Prevent default
    

    hamburguer.classList.contains('on') ? hamburguer.classList.remove('on') : hamburguer.classList.add('on');
    
    projects.classList.contains('hidden') ? projects.classList.remove('hidden') : projects.classList.add('hidden');

    projects.classList.contains('open_projects') ? projects.classList.remove('open_projects') : projects.classList.add('open_projects');

    proyectos.classList.contains('display_names') ? projects.classList.remove('display_names') : projects.classList.add('display_names');

});


//----LOCK WINDOW

//GEstores telefonicos: Alta SS, indefinido desde el primer momentos, sueldo fijo. Horario de 15 a 21. Formacion de 3 horas, online. Nos haran prueba de PCR. Equipos de 7, 8 personas por respondable. Formacion no remunerada, pero haremos un cruso online que nos dara un cerificado. 300 puntos de objetivo.




