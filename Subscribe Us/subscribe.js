/*function checked(){
    const x = document.querySelector('#submit');
    if (x.innerHTML == "Suscribed"){
        alert("Click OK to unsuscribe")
        location.reload();
    }
    else{
        toggleModal()
    }
    
}

//document.querySelector('#show-modal').addEventListener('click', checked);
document.querySelector('.field btn').addEventListener('click', checked);

document.querySelector('#submit')
  .addEventListener('click', (e) => {
  e.preventDefault();
  toggleModal();
  var email = document.getElementById('email').value;
  const x = document.getElementById('field');

  if (email == ""){
    alert("Invalid !")
  }
  else if(email !==""){
    alert("Congratulation! " + email + " you have been suscribed to our channel.");
   
    x.innerHTML = "Suscribed";
    document.getElementById("submit").style.backgroundColor = "grey";
   
}
  
});
*/

document.querySelector('onclick').addEventListener('click', checked);

document.querySelector('onclick')
  .addEventListener('click', (e) => {
  e.preventDefault();
  var email = document.getElementById('email').value;
  const x = document.getElementById('field');

  if (email == ""){
    alert("Invalid !")
  }
  else if(email !==""){
    alert("Congratulation! " + email + " you have been suscribed to our channel.");
   
    x.innerHTML = "Suscribed";
    document.getElementById("submit").style.backgroundColor = "grey";
   
}
  
});