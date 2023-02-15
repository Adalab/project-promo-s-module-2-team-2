/* eslint-disable strict */
//FUNCIONES INPUT-PREVIEW

const card = {
  palette: '',
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: ''
};

function namePreview() {
  if (inputName.value === '') {
    card.name = 'Nombre Apellidos';
    previewName.innerHTML = card.name;
  } else {
    card.name = inputName.value
    previewName.innerHTML = card.name;
  };
};

function job() {
  if (inputJob.value === '') {
    card.job = 'Front-end Developer';
    previewJob.innerHTML = card.job;
  } else {
    card.job = inputJob.value;
    previewJob.innerHTML = card.job;
  };
};

function email() {
  if (inputEmail.value !== '') {
    linkEmail.classList.remove('socials__disabled');
    card.email = `mailto:${inputEmail.value}`;
    linkEmail.href = card.email;
  }
};

function phone() {
  if (inputNumber.value !== '') {
    linkNumber.classList.remove('socials__disabled');
    card.phone = `tel:${inputNumber.value}`;
    linkNumber.href = card.phone;
  };
};

function linkedin() {
  if (inputLinkedin.value !== '') {
    linkLinkedin.classList.remove('socials__disabled');
    card.linkedin = inputLinkedin.value;
    linkLinkedin.href = card.linkedin;
  };
};

function github() {
  if (inputGithub.value !== '') {
    linkGithub.classList.remove('socials__disabled');
    card.github = inputGithub.value;
    linkGithub.href = card.github
  };
}


function handlePreview(event) {
  if (event.target.id === "full_name") {
    namePreview();
  };
  if (event.target.id === "job") {
    job();
  };
  if (event.target.id === "email") {
    email();
  }
  if (event.target.id === "phone") {
    phone();
  }
  if (event.target.id === "linkedin") {
    linkedin();
  }
  if (event.target.id === "github") {
    github();
  }
  if (event.target.value === '1') {
    card.palette = '1';
  } else if (event.target.value === '2') {
    card.palette = '2';
  } else if (event.target.value === '3') {
    card.palette = '3';
  }
}


///////////////

form.addEventListener('input', handlePreview);

// /******* */
// FormData.addEventListener("keyup", funcionManeja)
// ////^funcion manejadora
// if(eval.target.id === "¨name"){
//   objeto.name= input.value
// }else if(eval.target.id === "¨job"){
//   objeto.job = input.value;
// }