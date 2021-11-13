$('.owl-carousel').owlCarousel({
    margin:0,
    loop: true,
    nav:true,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

const myNav=document.querySelector('nav')
const myLink =myNav.querySelectorAll('a')
function darkMode(){
    var elements = document.getElementsByClassName("arxasi-qaralacaq-elementler")
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("back-black")
    }
    var whitetxt=document.getElementsByClassName('white-text')
    for (let a = 0; a < whitetxt.length; a++) {
        whitetxt[a].classList.toggle('txt-white')
        
    }
    let slidebtn=document.getElementsByClassName('owl-next')
    slidebtn[0].classList.toggle('btn-bg')
    let slidebtn1=document.getElementsByClassName('owl-prev')
    slidebtn1[0].classList.toggle('btn-bg')

    let dark=document.getElementById('small-images')
    dark.classList.toggle('sm-img-dark')

    let cardfootdark=document.getElementsByClassName('card-foot-dark')

    for (let a = 0; a < cardfootdark.length; a++) {
        cardfootdark[a].classList.toggle('card-f-dark')
        
    }
    let mytogler=document.getElementsByClassName('my-togler')

    mytogler[0].classList.toggle('my-togl')

    let mylogo=document.getElementById('my-logo')

    if(elements[0].classList.contains("back-black")){
        mylogo.src = "./img/logo-white.png";
    }else{
        mylogo.src = "./img/logo-dark.png";
    }
}