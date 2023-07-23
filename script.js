burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
leftnav = document.querySelector('.leftnav')
rightnav = document.querySelector('.rightnav')

burger.addEventListener('click',()=>{
    rightnav.classList.toggle('visibilityclass-resp')
    leftnav.classList.toggle('visibilityclass-resp')
    navbar.toggle('r-nav-resp')
})

