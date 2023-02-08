'use strict';

const backgroundColor = document.querySelector('.js-background');
const info = document.querySelector('.js-info');
const socials = document.querySelector('.js-socials');

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

function handleInputName(event) {
  const nameWritten = inputName.value;

  if (nameWritten === '') {
    previewName.innerHTML = 'Nombre Apellidos';
  } else {
    previewName.innerHTML = nameWritten;
  }
}

function handleInputEmail(event) {
  const emailWritten = inputEmail.value;
  linkEmail.href = `mailto:${emailWritten}`;
}

inputName.addEventListener('input', handleInputName);

inputEmail.addEventListener('input', handleInputEmail);
