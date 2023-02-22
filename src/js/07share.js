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
        // Mostrar un mensajito a la usuaria
      } else {
        // Muestro la dirección y el btn de Tw.
      }
    });
}

createBtn.addEventListener('click', handleClickShare);