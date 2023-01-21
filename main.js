
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let i = document.querySelector('#menu-icon i');
let major_container = document.querySelector('.major-container');
let read_more = document.querySelector('.about-text .btn');
let modal = document.querySelector('.read-more-modal');
let exit_icon = document.querySelector('.modal-header label');
let close_btn = document.querySelector('.read-more-modal .close-btn');


//Header scrolling
window.addEventListener('scroll', ()=> {
  header.classList.toggle('shadow', window.scrollY > 0);
 
}); // for smooth white transition in header


menu.onclick = () => {                   //toggles navbar and menu icon when user clicks menu button
  major_container.classList.toggle('cont-active'); //blurs other components when cart is clicked
  i.classList.toggle('fa-x');
  navbar.classList.toggle('active');
  
}

window.onscroll = ()=>{       //to remove navbar and menu icon when user scrolls
  i.classList.remove('fa-x');
  navbar.classList.remove('active');
  major_container.classList.remove('cont-active');
}

//read-more modal
read_more.onclick = () =>{
  major_container.classList.add('cont-active');
  modal.classList.add('slide_In_Out');
}

exit_icon.onclick = () =>{
  major_container.classList.remove('cont-active');
  modal.classList.remove('slide_In_Out');
}

close_btn.onclick = () =>{
  major_container.classList.remove('cont-active');
  modal.classList.remove('slide_In_Out');
}




//Swiper 

var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   
  });