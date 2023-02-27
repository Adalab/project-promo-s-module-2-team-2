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
        // añadí los mensajes de error, la info de la card los muestra en inglés por lo qué cuando aparezca un tipo de mensaje puse la traducción para que salga en castellano. No vi más mensajes de error que estos dos, pero podría haber más.
        errorMsg.classList.remove('collapsable');
        if (card.error.includes('Mandatory fields:')) {
          errorMsg.innerHTML = 'Todos los campos son obligatorios excepto el télefono. Por favor, revise y cubra los campos restantes.';
          hideMsg();
        } else if (card.error.includes('Database error:')) {
          errorMsg.innerHTML = 'La foto es desmasiado grande, intente reducirla o use otra foto';
          hideMsg();
        } else {
          errorMsg.innerHTML = 'Lo sentimos, ha ocurrido un error, inténtelo de nuevo más tarde';
          hideMsg();
        }
      } else {
        //para que se muestre la URL de la tarjeta creada y el botón de TW
        linkCard.href = card.cardURL;
        linkCard.innerHTML = card.cardURL;
        twitterBtn.href = `https://twitter.com/intent/tweet?url=${linkCard.href}&hashtags=card,awesoneCards`;
        showMsg();
      }
    });
}

// función para ocultar los campos si no se puede crear la tarjeta
function hideMsg() {
  createCard.classList.add('collapsable');
  twitterBtn.classList.add('collapsable');
  linkCard.classList.add('collapsable');
}

function showMsg() {
  errorMsg.classList.add('collapsable');
  createCard.classList.remove('collapsable');
  twitterBtn.classList.remove('collapsable');
  linkCard.classList.remove('collapsable');
}
// añadí esto para que se quite la opacidad el botón cuando los campos obligatorios están cubiertos, pero no funciona
function opacityBtn() {
  if (inputName.value !== '' && inputJob.value !== '' && inputEmail.value !== '' && inputLinkedin.value !== '' && inputGithub.value !== '') {
    createBtn.classList.remove('opacity');
  }
}
opacityBtn();


createBtn.addEventListener('click', handleClickShare);


