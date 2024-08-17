/*let emailInput = document.getElementById('email')
let passwordInput = document.getElementById('password')
let nameInput  = document.getElementById('nom');
let submitButton = document.getElementById('submit')

submitButton.addEventListener('click',(e) => {
    e.preventDefault();
    if(nameInput.value.length < 4){
        alert("le champ name ne doit pas être vide")
    }
    if(passwordInput.value.length < 3){
        alert("le champ password ne doit pas être vide")
    }
    if(emailInput.value = ""){
        ("le champ email ne doit pas être vide")
    }
})
alert('bonjour')
*/

let nameInput  = document.getElementById('nom');
let emailInput = document.getElementById('email')
let passwordInput = document.getElementById('password')

let errorName = document.getElementById("errorName");
let errorEmail = document.getElementById('errorEmail');
let errorPassword = document.getElementById('errorPassword');


let submitButton = document.getElementById('submit')


submitButton.addEventListener('click', (e) => {

     e.preventDefault();

     if(nameInput.value.length < 3) {
          
          errorName.textContent = `le champ ${nameInput.name} doit dépassser 3 caractères`;
          nameInput.style.borderRight = "4px solid red";

     } else {

          nameInput.style.borderRight = "4px solid green";
     }


     if (emailInput.value.length < 4) {
          
          errorEmail.textContent = `le champ ${emailInput.name} doit dépassser 4 caractères`;
          emailInput.style.borderRight = "4px solid red"
     } else {

          emailInput.style.borderRight = "4px solid green";
     }



     if(passwordInput.value.length < 4){
          errorPassword.textContent = `le champ ${passwordInput.name} doit dépassser 4 caractères`;
          passwordInput.style.borderRight = "4px solid red";
     }else {

          passwordInput.style.borderRight = "4px solid green";

     }




})
    