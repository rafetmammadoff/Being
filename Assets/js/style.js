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
//###############################################################################

const myNav=document.querySelector('nav')
const myLink =myNav.querySelectorAll('a')
function darkMode(){
    var elements = document.getElementsByClassName("arxasi-qaralacaq-elementler")
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("back-black")
    }
    //******************************************************************************** */
    var whitetxt=document.getElementsByClassName('white-text')
    for (let a = 0; a < whitetxt.length; a++) {
        whitetxt[a].classList.toggle('txt-white')
        
    }
//******************************************************************************** */

    let slidebtn=document.getElementsByClassName('owl-next')
    slidebtn[0].classList.toggle('btn-bg')
    let slidebtn1=document.getElementsByClassName('owl-prev')
    slidebtn1[0].classList.toggle('btn-bg')
    //******************************************************************************** */


    let dark=document.getElementById('small-images')
    dark.classList.toggle('sm-img-dark')
//******************************************************************************** */

    let cardfootdark=document.getElementsByClassName('card-foot-dark')

    for (let a = 0; a < cardfootdark.length; a++) {
        cardfootdark[a].classList.toggle('card-f-dark')
        
    }
//******************************************************************************** */

    let mytogler=document.getElementsByClassName('my-togler')

    mytogler[0].classList.toggle('my-togl')
    //************************************************************************* */

    let mylogo=document.getElementById('my-logo')

    if(elements[0].classList.contains("back-black")){
        mylogo.src = "./img/logo-white.png";
    }else{
        mylogo.src = "./img/logo-dark.png";
    }
    //************************************************************************* */
    let searchtoggle=document.getElementsByClassName('search')
    searchtoggle[0].classList.toggle('search-toggle-style')
    //************************************************************************ */
    let firstinp=document.getElementById('first-inp')
    firstinp.classList.toggle('f-input')
    //************************************************************************* */
    let firstbtn=document.getElementById('first-btn')
    firstbtn.classList.toggle('f-btn')
    //************************************************************************* */
    let distoggle=document.getElementsByClassName('disable')
    distoggle[0].classList.toggle('disable-toggle-style')
    //************************************************************************* */
    let myicon=document.getElementById('my-icon')
    
    if(elements[0].classList.contains("back-black")){
        myicon.classList.toggle('fa-moon')
        myicon.classList.remove('fa-sun')

    }else{
        myicon.classList.toggle('fa-sun')
        myicon.classList.remove("fa-moon")

    }

    //******************************************************************************* */
    let pagehover=document.getElementsByClassName('page-hover')
    for (let a = 0; a < pagehover.length; a++) {
        pagehover[a].classList.toggle('page-hover-style')
    }
    //******************************************************************************** */
    let langdark=document.getElementsByClassName('lang-dark')
    for (let l = 0; l < langdark.length; l++) {
        langdark[l].classList.toggle('lang-dark-style')
        
    }
    //*********************************************************************************** */
    
    

}
//#######################################################################
function mySearchArea(){
    let searcharea=document.getElementById('search-area')
    searcharea.classList.toggle('my-search-area-style')
}
//########################################################################

const changelang=document.querySelectorAll('.language')


const trLang=()=>{
    changelang[0].innerHTML="Ev"
    changelang[1].innerHTML="Makale"
    changelang[2].innerHTML="Mesaj Ozellikler"
    changelang[3].innerHTML="Sanat ve Tasarim"
    changelang[4].innerHTML="Sayfalar"
    changelang[5].innerHTML="Iletisim"
    
   
    
    
}
const enLang=()=>{
    changelang[0].innerHTML="Home"
    changelang[1].innerHTML="Blog"
    changelang[2].innerHTML="Posts Features"
    changelang[3].innerHTML="Art & Design"
    changelang[4].innerHTML="Pages"
    changelang[5].innerHTML="Contact"
}
//#############################################################################