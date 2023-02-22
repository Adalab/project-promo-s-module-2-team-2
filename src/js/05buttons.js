/* eslint-disable strict */

/*function resetInputs {
  inputPalette.value = 1;
  inputName.value = '';
  inputJob.value = '';
  inputEmail.value = '';
  inputNumber.value = '';
  inputGithub.value = '';
  inputLinkedin.value = '';
}*/

// function resetImage {
//   profileImage = 'url(./assets/images/totoro.jpeg)';
//   profilePreview = '';
// }

function handleReset(event) {
  event.preventDefault();
  
  card = {
    palette: 1,
    name: '',
    job: '',
    photo: '',
    email: '',
    phone: '',
    linkedin: '',
    github: ''
  };

  updatePreview();
  
  //resetInputs();
  //resetImage();
  
}

resetBtn.addEventListener('click', handleReset)
