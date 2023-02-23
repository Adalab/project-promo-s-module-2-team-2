/* eslint-disable strict */

function handleReset(event) {
  localStorage.removeItem('formData');
  event.preventDefault();
  card = {
    palette: '1',
    name: '',
    job: '',
    photo: '',
    email: '',
    phone: '',
    linkedin: '',
    github: ''
  };
  resetInputs();
  resetImage();
  resetPalette();
}

function resetImage() {
  profileImage.style.backgroundImage = `url("./assets/images/profile-pic.jpg")`;
  profilePreview.style.backgroundImage = '';
  updatePreview();
}

function resetInputs() {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
  }
}

function resetPalette() {
  radio1.checked = true;
  handleRadio1();
}

resetBtn.addEventListener('click', handleReset)