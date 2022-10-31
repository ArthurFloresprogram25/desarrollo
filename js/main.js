const navMenu=document.getElementById("nav-menu"),
navToggle=document.getElementById('nav-toggle'),
navClose=document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener("click", ()=>{
        navMenu.classList.add("show-menu");

    });
}

if (navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove("show-menu");
    });
}

const navLink=document.querySelectorAll(".nav__link")
function linkAction(){
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove("show-menu")
}
navLink.forEach(item=>item.addEventListener("click",linkAction))

/*Swiper*/
let homeSwiper= new Swiper(".home-swiper",{
    /*slidesPreView:"auto",*/
    /*direction:'vertical',*/
    spaceBetween: 30,
    loop: 'true',
    pagination:{
        el:'.swiper-pagintaion',
        clickable:true
    },
})

let newSwiper= new Swiper(".new-swiper",{
    centeredSlides:true,
    slidesPerView:"auto",
    loop:'true',
    spaceBetween:16,
})

/**Scroll up */
function scrollup(){
    const scrollup=document.getElementById("scroll-up")
    if(this.scrolly>=500) scrollup.classList.add("show-scroll"); else scrollup.classList.remove
    ("show-scroll")
}

window.addEventListener("scroll",scrollup);

/**Sections active */
const sections =document.querySelectorAll("section[id]");
function scrollActive(){
    const scrollY=window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop=current.offsetTop-58,
              sectionId= current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <=sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*='+ sectionId +']').classList.remove('active-link');
        }
    })
}

window.addEventListener("scroll", scrollActive)

/*Scrollreveal*/
const sra=ScrollReveal({
    origin:"top",
    distance: '60px',
    duration: 2500,
    delay:400,
    reset: true
}) 

sra.reveal(`.home`)

const sr=ScrollReveal({
    origin:"top",
    distance: '60px',
    duration: 1800,
    delay:400,
    reset: true
}) 

sr.reveal(`.home-swiper,.new-swiper,.newsletter__conyainer`)

sr.reveal(`.category__data, .trick__content, .footer__content`, {interval:500})
sr.reveal(`.about_data, .discount_img`, {irigin:"left"})
sr.reveal(`.about__img, .discount__data`,{origin:"rigth"})



