console.log('working')
let checkBtn = document.querySelector('.checkbtn');
 
let navUl = document.querySelector('.sm_nav_bar');
checkBtn.addEventListener('click', ()=>{
    navUl.classList.toggle('_none');
    
})