
function handleClick(event) {
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

reset.addEventListener('click', handleClick)
