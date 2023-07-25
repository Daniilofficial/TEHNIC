document.querySelector('.info__img1').addEventListener('click', () =>{
    document.querySelector('.header__burger').classList.toggle('active')
    document.querySelector('.nav__inner').classList.toggle('active')
    // document.querySelector('body').classList.toggle('lock')
})
document.querySelector('.info__img').addEventListener('click', () =>{
    document.querySelector('.info__img').classList.toggle('active')
    document.querySelector('.info__nav').classList.toggle('active')

    // document.querySelector('body').classList.toggle('lock2')
})

document.querySelector('.item').addEventListener('click', () =>{
    document.querySelector('.nav__item').classList.remove('active')
    document.querySelector('.content').classList.remove('active')
    document.querySelector('.item').classList.remove('active')
    
    document.querySelector('.item').classList.toggle('active')
    document.querySelector('.nav__item').classList.toggle('active')
    document.querySelector('.content').classList.toggle('active')
})
document.querySelector('.two').addEventListener('click', () =>{
    document.querySelector('.two').classList.toggle('active')
    document.querySelector('.nav__item.two').classList.toggle('active')
    document.querySelector('.content.two').classList.toggle('active')

})
document.querySelector('.three').addEventListener('click', () =>{
    document.querySelector('.three').classList.toggle('active')
    document.querySelector('.nav__item.three').classList.toggle('active')
    document.querySelector('.content.three').classList.toggle('active')

})
document.querySelector('.four').addEventListener('click', () =>{
    document.querySelector('.four').classList.toggle('active')
    document.querySelector('.nav__item.four').classList.toggle('active')
    document.querySelector('.content.four').classList.toggle('active')

})
document.querySelector('.five').addEventListener('click', () =>{

    document.querySelector('.five').classList.toggle('active')
    document.querySelector('.nav__item.five').classList.toggle('active')
    document.querySelector('.content.five').classList.toggle('active')
})

  const swiper = new Swiper('.image-slider', {

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    speed: 800,
    slidesPerView: 'auto',
    spaceBetween: 100,
    breakpoints:{
        320:{
            centeredSlides: true,
            spaceBetween: 100,

        },
        768:{
            centeredSlides: false,
            spaceBetween: 100,

        }
    }
  });