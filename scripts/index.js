//botton editar perfil
let popcontainer = document.querySelector(".popup__opened");

let container= document.querySelector(".main");

let editprofile = container.querySelector(".main__button_edit");
console.log(editprofile);


editprofile.addEventListener('click', ()=>{
  popcontainer.classList.remove('popup__opened')
});

//boton cerrar pupup

let closepopup = popcontainer.querySelector('.popup__close')
console.log(closepopup);

closepopup.addEventListener('click', ()=>{
  event.preventDefault();
  popcontainer.classList.add('popup__opened')
});

//poner el contenido del perfil en los campos del popup por defecto

let profilename = container.querySelector('.main__paragraph_name');
let profilejob = container.querySelector('.main__paragraph_job');

let popupname = popcontainer.querySelector('.popup__nombre');

let popupjob = popcontainer.querySelector('.popup__about');

popupjob.placeholder = profilejob.textContent;
popupname.placeholder = profilename.textContent;

//Cambiar el contenido de la secion perfil con los inputs del pupup al guardar

let popupsave = popcontainer.querySelector('.popup__guardar');

popupsave.addEventListener('click', ()=>{
  event.preventDefault();
  profilename.textContent = popupname.value || profilename.textContent;
  profilejob.textContent = popupjob.value || profilejob.textContent;
  popcontainer.classList.add('popup__opened');

});

