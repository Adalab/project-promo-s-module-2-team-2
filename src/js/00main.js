'use strict';

//VARIABLES PALETTES
const background = document.querySelector('.js-background');
const info = document.querySelector('.js-info');
const socials = document.querySelector('.js-socials');
const radio1 = document.querySelector('.js-palette1');
const radio2 = document.querySelector('.js-palette2');
const radio3 = document.querySelector('.js-palette3');


//FUNCIONES PALETTES
function handleRadio1(event) {
    console.log('fiestaaaaa');
if (background.classList.contains('palette3') && info.classList.contains('palette3') && socials.classList.contains('palette3')) 
  {background.classList.remove('palette3');
   info.classList.remove('palette3');
   socials.classList.remove('palette3');
  }
if (background.classList.contains('palette2') && info.classList.contains('palette2') && socials.classList.contains('palette2')) 
  {background.classList.remove('palette2');
   info.classList.remove('palette2');
   socials.classList.remove('palette2');
  }
}

function handleRadio2(event) {
    console.log('esperaaaaaanza');
 background.classList.add('palette2'); 
 info.classList.add('palette2'); 
 socials.classList.add('palette2');
  if (background.classList.contains('palette3') && info.classList.contains('palette3') && socials.classList.contains('palette3')) 
  {background.classList.remove('palette3');
   info.classList.remove('palette3');
   socials.classList.remove('palette3');
  }
}

function handleRadio3(event) {
    console.log('somos las mejores');
 background.classList.add('palette3'); 
 info.classList.add('palette3'); 
 socials.classList.add('palette3');
}

//EVENTOS PALETTES
radio1.addEventListener('click', handleRadio1);
radio2.addEventListener('click', handleRadio2);
radio3.addEventListener('click', handleRadio3);
 
//VARIABLES INPUT-PREVIEW
const inputName = document.querySelector('.js-input-name');
const inputJob = document.querySelector('.js-input-job');
const inputNumber = document.querySelector('.js-input-number');
const inputEmail = document.querySelector('.js-input-email');
const inputLinkedin = document.querySelector('.js-input-linkedin');
const inputGithub = document.querySelector('.js-input-github');

const previewName = document.querySelector('.js-preview-name');
const previewJob = document.querySelector('.js-preview-job');
const linkNumber = document.querySelector('.js-preview-number');
const linkEmail = document.querySelector('.js-preview-email');
const linkLinkedin = document.querySelector('.js-preview-linkedin');
const linkGithub = document.querySelector('.js-preview-github');
/*--------------------------------------------------------------*/

//FUNCIONES INPUT-PREVIEW

function handleInputName(event) {
  const nameWritten = inputName.value;

  if (nameWritten === '') {
    previewName.innerHTML = 'Nombre Apellidos';
  } else {
    previewName.innerHTML = nameWritten;
  }
}

function handleInputJob(event) {
  const jobWritten = inputJob.value;

  if (jobWritten === '') {
    previewJob.innerHTML = 'Front-end Developer';
  } else {
    previewJob.innerHTML = jobWritten;
  }
}

function handleInputEmail(event) {
  const emailWritten = inputEmail.value;
  linkEmail.href = `mailto:${emailWritten}`;
}

function handleInputNumber(event) {
  const numberWritten = inputNumber.value;
  linkNumber.href = `tel:${numberWritten}`;
}

function handleInputLinkedin(event) {
  const linkedinWritten = inputLinkedin.value;
  linkLinkedin.href = linkedinWritten;
}

function handleInputGithub(event) {
  const githubWritten = inputGithub.value;
  linkGithub.href = githubWritten;
}

//EVENTOS INPUT-PREVIEW

inputName.addEventListener('input', handleInputName);
inputJob.addEventListener('input', handleInputJob);

inputNumber.addEventListener('input', handleInputNumber);
inputEmail.addEventListener('input', handleInputEmail);
inputLinkedin.addEventListener('input', handleInputLinkedin);
inputGithub.addEventListener('input', handleInputGithub);