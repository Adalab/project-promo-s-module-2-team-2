/* eslint-disable strict */
//FUNCIONES INPUT-PREVIEW

const card = {
  palette: 1,
  name: '',
  job: '',
  photo: '',
  email: '',
  phone: '',
  linkedin: '',
  github: ''
};

function handleInputName(event) {
  card.name = inputName.value
  updatePreview();
};

function handleInputJob(event) {
  updatePreview();
};

function handleInputEmail(event) {
  updatePreview();
};

function handleInputNumber(event) {
  updatePreview();
};

function handleInputLinkedin(event) {
  updatePreview();
}

function handleInputGithub(event) {
  updatePreview();
}

function updatePreview() {
  // actualizar nombre
  if (card.name === '') {
    previewName.innerHTML = 'Nombre Apellido';
  } else {
    previewName.innerHTML = card.name;
  }
  // actualizar trabajo
  if (inputName.value === '') {
    previewName.innerHTML = 'Nombre Apellido';
  } else {
    previewName.innerHTML = inputName.value;
  }
  // actualizar email
  if (inputEmail.value !== '') {
    linkEmail.classList.remove('socials__disabled');
    linkEmail.href = `mailto:${inputEmail.value}`;
  };
  // actualizar phone
  if (inputNumber.value !== '') {
    linkNumber.classList.remove('socials__disabled');
    linkNumber.href = `tel:${inputNumber.value}`;
  };
  // actualizar Linkedin
  if (inputLinkedin.value !== '') {
    linkLinkedin.classList.remove('socials__disabled');
    linkLinkedin.href = inputLinkedin.value;
  };
  // actualizar github
  if (inputGithub.value !== '') {
    linkGithub.classList.remove('socials__disabled');
    linkGithub.href = inputGithub.value;
  };
}




inputName.addEventListener('input', handleInputName);
inputJob.addEventListener('input', handleInputJob);
inputEmail.addEventListener('input', handleInputEmail);
inputNumber.addEventListener('input', handleInputNumber);
inputLinkedin.addEventListener('input', handleInputLinkedin);
inputGithub.addEventListener('input', handleInputGithub);