
// togle hide-share method + rotating arrows


const designShow = document.querySelector('.form__arrow--design');
const fillShow = document.querySelector('.form__arrow--fill');
const shareShow = document.querySelector('.form__arrow--share');

const collapsableDesign = document.querySelector('#form__design--open');
const collapsableFill = document.querySelector('#form__fill--open');
const collapsableShare = document.querySelector('#form__share--open');

function hideDesign () {
  designShow.classList.remove('form__arrow--collapse');
  collapsableDesign.classList.add('hidden');
}
function hideFill () {
  fillShow.classList.remove('form__arrow--collapse');
  collapsableFill.classList.add('hidden');
}
function hideShare () {
  shareShow.classList.remove('form__arrow--collapse');
  collapsableShare.classList.add('hidden');
}

function showDesignInfo(event){
  event.preventDefault();
  if (designShow.classList.contains('form__arrow--collapse')){
    hideDesign();
    hideFill();
    hideShare();
  } else {
    designShow.classList.add('form__arrow--collapse');
    collapsableDesign.classList.remove('hidden');
    hideFill();
    hideShare();
  }
}

function showFillInfo(event){
  event.preventDefault();
  if (fillShow.classList.contains('form__arrow--collapse')){
    hideDesign();
    hideFill();
    hideShare();
  } else {
    fillShow.classList.add('form__arrow--collapse');
    collapsableFill.classList.remove('hidden');
    hideDesign();
    hideShare();
  }
}

function showShareInfo(event){
  event.preventDefault();
  if (shareShow.classList.contains('form__arrow--collapse')){
    hideDesign();
    hideFill();
    hideShare();
  } else {
    shareShow.classList.add('form__arrow--collapse')
    collapsableShare.classList.remove('hidden');  
    hideDesign();
    hideFill();
  }
}

fillShow.addEventListener('click', showFillInfo);
designShow.addEventListener('click', showDesignInfo);
shareShow.addEventListener('click', showShareInfo);
'use strict';
// PREVIEW CARD FUNCTIONS **********************************************************+

// RESET ------------------------------------------------------------------------------
const resetButton = document.querySelector('.preview__resetButton');

const formReset = () => { document.getElementById('form__card').reset();
}
const resetHandler = () => {
   formReset();
   getText();
   showEmailButton();
   showPhoneButton();
   showLinkedinButton();
   showGithubButton();
   document.querySelector('.nameText').innerHTML = 'Nombre Apellido';
   document.querySelector('.jobText').innerHTML = 'Front-End developer';
   photoPreview.style.backgroundImage = '';
   photoThumbnail.style.backgroundImage = '';
}

resetButton.addEventListener('click', resetHandler);
// Color Palette ----------------------------------------------------------------------


// Text info --------------------------------------------------------------------------

const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');
const nameBox = document.querySelector('.nameText');
const jobBox = document.querySelector('.jobText');

const getText = (x) => {
   nameBox.innerHTML = nameInput.value;
   jobBox.innerHTML = jobInput.value;
   enableCreateButton();
}

nameInput.addEventListener('keyup', getText);
jobInput.addEventListener('keyup', getText);

// Social Buttons - MAIL ---------------------------------------------------------------------
const emailBox = document.querySelector('#email');
const emailButton = document.querySelector('#emailButton');

const showEmailButton = () => emailBox.value.length !== 0 ? emailButton.classList.remove('hidden') : emailButton.classList.add('hidden');
const getEmailLink = () => { emailButton.querySelector('#emailButtonLink').href = `mailto:${emailBox.value}` };

const emailHandler = () => {
   showEmailButton();
   getEmailLink();
   enableCreateButton();
}

emailBox.addEventListener('keyup', emailHandler);

// Social Buttons - PHONE ---------------------------------------------------------------------
const phoneBox = document.querySelector('#phone');
const phoneButton = document.querySelector('#phoneButton');

const showPhoneButton = () => phoneBox.value.length !== 0 ? phoneButton.classList.remove('hidden') : phoneButton.classList.add('hidden');
const getPhoneLink = () => { phoneButton.querySelector('#phoneButtonLink').href = `tel:${phoneBox.value}` };

const phoneHandler = () => {
   showPhoneButton();
   getPhoneLink();
   enableCreateButton();
}

phoneBox.addEventListener('keyup', phoneHandler);

// Social Buttons - LINKEDIN ---------------------------------------------------------------------
const linkedinBox = document.querySelector('#linkedin');
const linkedinButton = document.querySelector('#linkedinButton');

const showLinkedinButton =  () => linkedinBox.value.length !== 0 ? linkedinButton.classList.remove('hidden') : linkedinButton.classList.add('hidden');
const getLinkedinLink = () => { linkedinButton.querySelector('#linkedinButtonLink').href = `https://www.linkedin.com/in/${linkedinBox.value}` };

const linkedinHandler = () => {
   showLinkedinButton();
   getLinkedinLink();
   enableCreateButton();
}

linkedinBox.addEventListener('keyup', linkedinHandler);

// Social Buttons - GITHUB ---------------------------------------------------------------------
const githubBox = document.querySelector('#github');
const githubButton = document.querySelector('#githubButton');

const showGithubButton =  () => githubBox.value.length !== 0 ? githubButton.classList.remove('hidden') : githubButton.classList.add('hidden');
const getGithubLink = () => { githubButton.querySelector('#githubButtonLink').href = `https://www.github.com/${githubBox.value}` };

const githubHandler = () => {
   showGithubButton();
   getGithubLink();
   enableCreateButton();
}


githubBox.addEventListener('keyup', githubHandler);

// SHARE - create and share buttons ----------------------------------------------------------------

const createCardButton = document.querySelector('#createCardButton');

function enableCreateButton () {
   if (nameInput.value.lenght !== 0 && jobInput.value !== 0 && emailBox.value.length !== 0 && linkedinBox.value.length !== 0 && githubBox.value.length !== 0) {
      createCardButton.classList.remove('off');
    } else {
      createCardButton.classList.add('off');
    }
};


const createCard = () => {
   event.preventDefault();
   console.log('a new card has been created'); // AÑADIR EN ESTA FUNCIÓN acciones para crear tarjeta
};
createCardButton.addEventListener('click', createCard);
'use strict';


const palette1 = document.querySelector('#paletteOne');
const palette2 = document.querySelector('#paletteTwo');
const palette3 = document.querySelector('#paletteThree');
const palette4 = document.querySelector('#paletteFour');
const palettePreview = document.querySelector('#changePreviewStyle');
//using for of loop
// const socialButton = document.querySelectorAll('.preview__buttonList--item')

function selectPalette1(){
    palettePreview.classList.add('infoStyle1');
    palettePreview.classList.remove('infoStyle2');palettePreview.classList.remove('infoStyle3');
    palettePreview.classList.remove('infoStyle4');

    // for (let preview of socialButton) {
    //  socialButton.classList.add('')<--create style
    // }
    console.log('hey');
}

function selectPalette2(){
    palettePreview.classList.remove('infoStyle1');
    palettePreview.classList.add('infoStyle2');
    palettePreview.classList.remove('infoStyle3');
    palettePreview.classList.remove('infoStyle4');
    
    console.log('not working!!');
}

function selectPalette3(){
    palettePreview.classList.remove('infoStyle1');
    palettePreview.classList.remove('infoStyle2');
    palettePreview.classList.add('infoStyle3');
    palettePreview.classList.remove('infoStyle4');

    console.log('fffff....');
}


function selectPalette4(){
    palettePreview.classList.remove('infoStyle1');
    palettePreview.classList.remove('infoStyle2');
    palettePreview.classList.remove('infoStyle3');
    palettePreview.classList.add('infoStyle4');

    console.log('fffff....');
}


palette1.addEventListener('click', selectPalette1);
palette2.addEventListener('click', selectPalette2);
palette3.addEventListener('click', selectPalette3);
palette4.addEventListener('click', selectPalette4);
'use strict';

const reader = new FileReader();
const photoFile = document.querySelector('.js__photo--file');
const photoUploadBtn = document.querySelector('.js__photo--btn');
const photoThumbnail = document.querySelector('.js__photo--thumbnail');
const photoPreview = document.querySelector('.js__photo--preview');

function getPhoto(evt) {
  const myFile = evt.currentTarget.files[0];
  reader.addEventListener('load', addPhoto);
  reader.readAsDataURL(myFile);
}

function addPhoto() {
  photoPreview.style.backgroundImage = `url(${reader.result})`;
  photoThumbnail.style.backgroundImage = `url(${reader.result})`;
}

function hiddenPhotoField() {
  photoFile.click(); 
}

photoUploadBtn.addEventListener('click', hiddenPhotoField);
photoFile.addEventListener('change', getPhoto);
//# sourceMappingURL=main.js.map
