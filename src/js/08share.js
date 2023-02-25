/* eslint-disable strict */

function handleClickShare(event) {
  event.preventDefault();
  fetch('https://dev.adalab.es/api/card/', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(card),
  })
    .then((response) => response.json())
    .then((card) => {
      console.log(card);

      if (!card.success) {
        errorMsg.classList.remove('collapsable');
        if (card.error.includes('Mandatory fields:')) {
          errorMsg.innerHTML = 'Todos los campos son obligatorios excepto el télefono. Por favor, revise y cubra los campos restantes.';
        } else if (card.error.includes('Database error:')) {
          errorMsg.innerHTML = 'La foto es desmasiado grande, intente reducirla o use otra foto';
        } else {
          errorMsg.innerHTML = 'Lo sentimos, ha ocurrido un error, inténtelo de nuevo más tarde';
        }
      } else {
        errorMsg.classList.add('collapsable');
        createCard.classList.remove('collapsable');
        twitterBtn.classList.remove('collapsable');
        linkCard.href = card.cardURL;
        linkCard.innerHTML = card.cardURL;
      }
    });
}


// esto no funciona
if (inputName.value !== '' && inputJob.value !== '' && inputEmail.value !== '' && inputLinkedin.value !== '' && inputGithub.value !== '') {
  createBtn.classList.remove('opacity');
}

createBtn.addEventListener('click', handleClickShare);


