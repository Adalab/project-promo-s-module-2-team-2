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
  card.name = inputName.value;
  updatePreview();
};

function handleInputJob(event) {
  card.job = inputJob.value;
  updatePreview();
};

function handleInputEmail(event) {
  card.email = inputEmail.value;
  updatePreview();
};

function handleInputNumber(event) {
  card.phone = inputNumber.value;
  updatePreview();
};

function handleInputLinkedin(event) {
  card.linkedin = inputLinkedin.value;
  updatePreview();
}

function handleInputGithub(event) {
  card.github = inputGithub.value;
  updatePreview();
}

function updatePreview() {
  console.log(card)
  // actualizar nombre
  if (card.name === '') {
    previewName.innerHTML = 'Nombre Apellido';
  } else {
    previewName.innerHTML = card.name;
  }
  // actualizar trabajo
  if (card.job === '') {
    previewJob.innerHTML = 'Front-end Developer';
  } else {
    previewJob.innerHTML = card.job;
  }
  // actualizar email
  if (card.email !== '') {
    linkEmail.classList.remove('socials__disabled');
    linkEmail.href = `mailto:${card.email}`;
  };
  // actualizar phone
  if (card.phone !== '') {
    linkNumber.classList.remove('socials__disabled');
    linkNumber.href = `tel:${card.phone}`;
  };
  // actualizar Linkedin
  if (card.linkedin !== '') {
    linkLinkedin.classList.remove('socials__disabled');
    linkLinkedin.href = card.linkedin;
  };
  // actualizar github
  if (card.github !== '') {
    linkGithub.classList.remove('socials__disabled');
    linkGithub.href = card.github;
  };
}




inputName.addEventListener('input', handleInputName);
inputJob.addEventListener('input', handleInputJob);
inputEmail.addEventListener('input', handleInputEmail);
inputNumber.addEventListener('input', handleInputNumber);
inputLinkedin.addEventListener('input', handleInputLinkedin);
inputGithub.addEventListener('input', handleInputGithub);