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
        } else if (card.error.includes('Database error:')) {
          errorMsg.innerHTML = 'La foto es desmasiado grande, intente reducirla o use otra foto';
        } else {
          errorMsg.innerHTML = 'Lo sentimos, ha ocurrido un error, inténtelo de nuevo más tarde';
        }
      } else {
        //para que se muestre la URL de la tarjeta creada y el botón de TW
        errorMsg.classList.add('collapsable');
        createCard.classList.remove('collapsable');
        twitterBtn.classList.remove('collapsable');
        linkCard.href = card.cardURL;
        linkCard.innerHTML = card.cardURL;
        twitterBtn.href = `https://twitter.com/intent/tweet?url=${linkCard.href}&hashtags=card,awesoneCard`;
      }
    });
}


// añadí esto para que se quite la opacidad el botón cuando los campos obligatorios están cubiertos, pero no funciona
function opacityBtn() {
  if (inputName.value.length !== 0 && inputJob.value.length !== 0 && inputEmail.value.length !== 0 && inputLinkedin.value.length !== 0 && inputGithub.value.length !== 0) {
    createBtn.classList.remove('opacity');
  }
}


createBtn.addEventListener('click', handleClickShare);


