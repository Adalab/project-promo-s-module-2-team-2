


const localStorageData = JSON.parse(localStorage.getItem('formData'))
console.log(localStorageData);;

if (localStorageData) {
  card = localStorageData;
  inputName.value = card.name;
  inputJob.value = card.job;
  inputEmail.value = card.email;
  inputNumber.value = card.phone;
  profileImage.style.backgroundImage = `url(${card.photo})`;
  profilePreview.style.backgroundImage = `url(${card.photo})`;
  inputLinkedin.value = card.linkedin;
  inputGithub.value = card.github;
  if (card.palette === '1') {
    addPalette1();
    radio1.checked = true;
  } else if (card.palette === '2') {
    addPalette2();
    radio2.checked = true;
  } else if (card.palette === '3') {
    addPalette3();
    radio3.checked = true;
  }
  updatePreview();
}
