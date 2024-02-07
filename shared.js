var backdrop = document.querySelectorAll('.backdrop');
var modal= document.querySelector('.modal');
var modalNoButton = document.querySelector(".modal__action--negative");
var selectbuttons=document.querySelectorAll('.three button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
//console.log(backdrop);

for(var i=0; i< selectbuttons.length; i++){
    selectbuttons[i].addEventListener('click', function() {
    modal.style.display ='block';
    backdrop.style.display ='block';
    });
}

backdrop.addEventListener("click", function() {
    mobileNav.style.display = 'none';
    closeModal();
});

modalNoButton.addEventListener("click", closeModal);

function closeModal() {
  backdrop.style.display = "none";
  modal.style.display = "none";
}

toggleButton.addEventListener('click', function() {
    mobileNav.style.display = 'block';
    backdrop.style.display = 'block';
});
