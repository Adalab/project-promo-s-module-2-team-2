"use strict";const designLegend=document.querySelector(".js-design-legend"),down1=document.querySelector(".js-down1"),up1=document.querySelector(".js-up1"),design=document.querySelector(".js-design"),fillLegend=document.querySelector(".js-fill-legend"),down2=document.querySelector(".js-down2"),up2=document.querySelector(".js-up2"),fill=document.querySelector(".js-fill"),shareLegend=document.querySelector(".js-share-legend"),down3=document.querySelector(".js-down3"),up3=document.querySelector(".js-up3"),share=document.querySelector(".js-share"),background=document.querySelector(".js-background"),info=document.querySelector(".js-info"),socials=document.querySelector(".js-socials"),radio1=document.querySelector(".js-palette1"),radio2=document.querySelector(".js-palette2"),radio3=document.querySelector(".js-palette3"),previewName=document.querySelector(".js-preview-name"),previewJob=document.querySelector(".js-preview-job"),linkNumber=document.querySelector(".js-preview-number"),linkEmail=document.querySelector(".js-preview-email"),linkLinkedin=document.querySelector(".js-preview-linkedin"),linkGithub=document.querySelector(".js-preview-github"),inputs=document.querySelectorAll(".js-input"),fr=new FileReader,fileField=document.querySelector(".js__profile-upload-btn"),profileImage=document.querySelector(".js__profile-image"),profilePreview=document.querySelector(".js__profile-preview"),resetBtn=document.querySelector(".js-btnreset"),createBtn=document.querySelector(".js-create-btn");function addPalette1(){background.classList.add("palette1"),info.classList.add("palette1"),socials.classList.add("palette1")}function addPalette2(){background.classList.add("palette2"),info.classList.add("palette2"),socials.classList.add("palette2")}function addPalette3(){background.classList.add("palette3"),info.classList.add("palette3"),socials.classList.add("palette3")}function removePalette1(){background.classList.contains("palette1")&&info.classList.contains("palette1")&&socials.classList.contains("palette1")&&(background.classList.remove("palette1"),info.classList.remove("palette1"),socials.classList.remove("palette1"))}function removePalette2(){background.classList.contains("palette2")&&info.classList.contains("palette2")&&socials.classList.contains("palette2")&&(background.classList.remove("palette2"),info.classList.remove("palette2"),socials.classList.remove("palette2"))}function removePalette3(){background.classList.contains("palette3")&&info.classList.contains("palette3")&&socials.classList.contains("palette3")&&(background.classList.remove("palette3"),info.classList.remove("palette3"),socials.classList.remove("palette3"))}function handleRadio1(e){removePalette2(),removePalette3()}function handleRadio2(e){removePalette3(),addPalette2()}function handleRadio3(e){addPalette3()}function handleDesign(e){fill.classList.add("collapsable"),share.classList.add("collapsable"),design.classList.remove("collapsable"),up1.classList.remove("collapsable"),down1.classList.add("collapsable"),up3.classList.add("collapsable"),down3.classList.remove("collapsable"),up2.classList.add("collapsable"),down2.classList.remove("collapsable")}function handleFill(e){design.classList.add("collapsable"),share.classList.add("collapsable"),fill.classList.remove("collapsable"),up2.classList.remove("collapsable"),down2.classList.add("collapsable"),up1.classList.add("collapsable"),down1.classList.remove("collapsable"),up3.classList.add("collapsable"),down3.classList.remove("collapsable")}function handleShare(e){design.classList.add("collapsable"),fill.classList.add("collapsable"),share.classList.remove("collapsable"),up3.classList.remove("collapsable"),down3.classList.add("collapsable"),up2.classList.add("collapsable"),down2.classList.remove("collapsable"),up1.classList.add("collapsable"),down1.classList.remove("collapsable")}radio1.addEventListener("click",handleRadio1),radio2.addEventListener("click",handleRadio2),radio3.addEventListener("click",handleRadio3),designLegend.addEventListener("click",handleDesign),fillLegend.addEventListener("click",handleFill),shareLegend.addEventListener("click",handleShare);let card={palette:1,name:"",job:"",photo:"",email:"",phone:"",linkedin:"",github:""};function handleInputs(e){card[e.target.id]=e.target.value,localStorage.setItem("formData",JSON.stringify(card)),updatePreview()}function updatePreview(){""===card.name?previewName.innerHTML="Nombre Apellido":previewName.innerHTML=card.name,""===card.job?previewJob.innerHTML="Front-end Developer":previewJob.innerHTML=card.job,""!==card.email&&(linkEmail.classList.remove("socials__disabled"),linkEmail.href="mailto:"+card.email),""!==card.phone&&(linkNumber.classList.remove("socials__disabled"),linkNumber.href="tel:"+card.phone),""!==card.linkedin&&(linkLinkedin.classList.remove("socials__disabled"),linkLinkedin.href=card.linkedin),""!==card.github&&(linkGithub.classList.remove("socials__disabled"),linkGithub.href=card.github),profileImage.style.backgroundImage=`url(${card.photo})`}for(const e of inputs)e.addEventListener("input",handleInputs);function handleReset(e){e.preventDefault(),card={palette:1,name:"",job:"",photo:"",email:"",phone:"",linkedin:"",github:""},updatePreview(),resetInputs(),resetImage(),resetPalette(),localStorage.removeItem("formData")}function resetImage(){profileImage.style.backgroundImage="url(./assets/images/profile-pic.jpg)",profilePreview.style.backgroundImage=""}function resetInputs(){for(let e=0;e<inputs.length;e++)inputs[e].value=""}function resetPalette(){radio1.checked=!0,handleRadio1()}function getImage(e){const a=e.currentTarget.files[0];fr.addEventListener("load",writeImage),fr.readAsDataURL(a)}function writeImage(){card.photo=fr.result,profileImage.style.backgroundImage=`url(${fr.result})`,profilePreview.style.backgroundImage=`url(${fr.result})`}resetBtn.addEventListener("click",handleReset),fileField.addEventListener("change",getImage);const inputName=document.querySelector(".js-input-name"),inputJob=document.querySelector(".js-input-job"),inputNumber=document.querySelector(".js-input-number"),inputEmail=document.querySelector(".js-input-email"),inputLinkedin=document.querySelector(".js-input-linkedin"),inputGithub=document.querySelector(".js-input-github"),inputRadio=document.querySelectorAll(".js-input-colors"),localStorageData=JSON.parse(localStorage.getItem("formData"));function handleClickShare(e){e.preventDefault(),fetch("https://dev.adalab.es/api/card/",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(card)}).then(e=>e.json()).then(e=>{console.log(e),e.success})}console.log(localStorageData),localStorageData&&(card=localStorageData,inputName.value=card.name,inputJob.value=card.job,inputEmail.value=card.email,inputNumber.value=card.phone,profileImage.style.backgroundImage=`url(${card.photo})`,profilePreview.style.backgroundImage=`url(${card.photo})`,inputLinkedin.value=card.linkedin,inputGithub.value=card.github,"1"===card.palette?(addPalette1(),radio1.checked=!0):"2"===card.palette?(addPalette2(),radio2.checked=!0):"3"===card.palette&&(addPalette3(),radio3.checked=!0),updatePreview()),createBtn.addEventListener("click",handleClickShare);