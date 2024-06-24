const equiv = document.querySelector(".equiv");
const nav = document.querySelector(".nav");
const times = document.querySelector(".times");
const welcome = document.querySelector(".welcome-message");
const body = document.querySelector(".body");
const sections = document.querySelectorAll(".section");
const alert = document.querySelector(".alert");
const alertCancel = document.querySelector(".alert-cancel")
const alertBackground = document.querySelector(".alert-background")
setTimeout(()=>{
     alert.style.opacity = '1'
     welcome.style.opacity = '0'
     alertBackground.style.opacity = '1'
   } ,10);
   alertCancel.addEventListener('click', ()=> {
     alert.style.opacity = '0'
     welcome.style.opacity = '1'
     alertBackground.style.opacity = '0'
     setTimeout(()=>{
       alertBackground.style.display = 'none'
       alert.style.display = 'none'
     } , 600)
   })

 equiv.addEventListener('click', ()=> {
   nav.style.width = '100%'
   equiv.style.display = 'none'
   times.style.display = 'block'
   welcome.style.opacity = '0'
 })
 times.addEventListener('click', ()=> {
   nav.style.width = '0'
   equiv.style.display = 'block'
   times.style.display = 'none'
 })
const mediaQuery = window.matchMedia('(max-width:1000px)');

   
  if (mediaQuery.matches){
    sections.forEach(section => {
      section.addEventListener('click', ()=>{
        nav.style.width = '0'
       equiv.style.display = 'block'
       times.style.display = 'none'
      })
     })
  }
    window.addEventListener('scroll', ()=>{
      if(window.scrollY > 0){
        welcome.style.opacity = '0'
      }
      else{
        welcome.style.opacity = '1'
      }
    })