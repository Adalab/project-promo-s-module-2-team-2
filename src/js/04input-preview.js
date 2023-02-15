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
  if (emailWritten !== '') {
    linkEmail.classList.remove('socials__disabled');
    linkEmail.href = `mailto:${emailWritten}`;
  };
}

function handleInputNumber(event) {
  const numberWritten = inputNumber.value;
  if (numberWritten !== '') {
    linkNumber.classList.remove('socials__disabled');
    linkNumber.href = `tel:${numberWritten}`;
  };

}

function handleInputLinkedin(event) {
  const linkedinWritten = inputLinkedin.value;
  if (linkedinWritten !== '') {
    linkLinkedin.classList.remove('socials__disabled');
    linkLinkedin.href = linkedinWritten;;
  };

}

function handleInputGithub(event) {
  const githubWritten = inputGithub.value;
  if (githubWritten !== '') {
    linkGithub.classList.remove('socials__disabled');
    linkGithub.href = githubWritten;
  };
}

//EVENTOS INPUT-PREVIEW

inputName.addEventListener('input', handleInputName);
inputJob.addEventListener('input', handleInputJob);

inputNumber.addEventListener('input', handleInputNumber);
inputEmail.addEventListener('input', handleInputEmail);
inputLinkedin.addEventListener('input', handleInputLinkedin);
inputGithub.addEventListener('input', handleInputGithub);

// /******* */
// FormData.addEventListener("keyup", funcionManeja)
// ////^funcion manejadora
// if(eval.target.id === "¨name"){
//   objeto.name= input.value
// }else if(eval.target.id === "¨job"){
//   objeto.job = input.value;
// }