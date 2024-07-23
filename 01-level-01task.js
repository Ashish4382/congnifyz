
const buttonElement = document.querySelector('.submit-button');
buttonElement.addEventListener('click', function(){

  buttonElement.classList.toggle('toggled');
  
if(buttonElement.classList.contains('toggled')){
buttonElement.innerText = 'Thanku for Applying';

}else{
buttonElement.innerText = 'submit'
}


});