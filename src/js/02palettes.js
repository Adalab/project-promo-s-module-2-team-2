

//FUNCIONES PALETTES
function handleRadio1(event) {
  if (background.classList.contains('palette3') && info.classList.contains('palette3') && socials.classList.contains('palette3')) {
    background.classList.remove('palette3');
    info.classList.remove('palette3');
    socials.classList.remove('palette3');
  }
  if (background.classList.contains('palette2') && info.classList.contains('palette2') && socials.classList.contains('palette2')) {
    background.classList.remove('palette2');
    info.classList.remove('palette2');
    socials.classList.remove('palette2');
  }
}

function handleRadio2(event) {
  background.classList.add('palette2');
  info.classList.add('palette2');
  socials.classList.add('palette2');
  if (background.classList.contains('palette3') && info.classList.contains('palette3') && socials.classList.contains('palette3')) {
    background.classList.remove('palette3');
    info.classList.remove('palette3');
    socials.classList.remove('palette3');
  }
}

function handleRadio3(event) {
  background.classList.add('palette3');
  info.classList.add('palette3');
  socials.classList.add('palette3');
}

//EVENTOS PALETTES
radio1.addEventListener('click', handleRadio1);
radio2.addEventListener('click', handleRadio2);
radio3.addEventListener('click', handleRadio3);
