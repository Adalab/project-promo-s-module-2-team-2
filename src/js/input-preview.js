/* eslint-disable strict */
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

inputName.addEventListener('input', handleInputName);
inputJob.addEventListener('input', handleInputJob);

inputNumber.addEventListener('input', handleInputNumber);
inputEmail.addEventListener('input', handleInputEmail);
inputLinkedin.addEventListener('input', handleInputLinkedin);
inputGithub.addEventListener('input', handleInputGithub);