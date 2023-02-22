/* eslint-disable strict */

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
  resetInputs();
  resetImage();
  resetPalette();
  localStorage.removeItem('formData');
}

function resetImage() {
  profileImage.style.backgroundImage = `url(./assets/images/profile-pic.jpg)`;
  profilePreview.style.backgroundImage = '';
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