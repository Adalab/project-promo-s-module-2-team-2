
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
  updatePreview()
}

btnReset.addEventListener('click', handleReset)
