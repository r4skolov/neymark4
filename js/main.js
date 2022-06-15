"use strict";
document.addEventListener("DOMContentLoaded", () => {
  //slider merch
  const swiper = new Swiper('.merch__swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


  // бургер меню
  function disableScroll() {
    let pagePosition = window.scrollY;
    document.body.classList.add('scroll');
    document.body.dataset.position = pagePosition;
    document.body.style.top = -pagePosition + 'px';
  }
  
  function enableScroll() {
    let pagePosition = parseInt(document.body.dataset.position, 10);
    document.body.style.top = 'auto';
    document.body.classList.remove('scroll');
    window.scroll({
      top: pagePosition,
      left: 0
    });
    document.body.removeAttribute('data-position');
  }
  
  
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.nav');
  const menuWrap = document.querySelector('.nav__wrapper');
  const menuItem = document.querySelectorAll('.nav__link');
  burger.addEventListener('click', () => {
    menu.classList.toggle('overlay');
    burger.classList.toggle('burger--active');
    menuWrap.classList.toggle('nav--active');

    
    if (burger.classList.contains('burger--active')) {
      disableScroll();
    } else {
      enableScroll();
    }
  });

  menuItem.forEach(el => {
    el.addEventListener('click', () => {
      menu.classList.remove('overlay');
      burger.classList.remove('burger--active');
      menuWrap.classList.remove('nav--active');
      enableScroll();
    })
  })
  


  // точки на карте
  const dotsBtn = document.querySelectorAll('.map__dots');
  const dotsItem = document.querySelectorAll('.locations__item');

  dotsBtn.forEach(function(item) {
      item.addEventListener("click", function() {

          let currentBtn = item;
          let dotId = currentBtn.getAttribute("data-dot"); 
          let currentDot = document.querySelector(dotId); 


          if (! currentBtn.classList.contains('active') ) {
          dotsBtn.forEach (function(item) {
              item.classList.remove('active');
          });

          currentBtn.classList.add('active');

          dotsItem.forEach(function(item){
              item.classList.remove('active');
          });

          currentDot.classList.add('active');
          }
      });
  });

 //скролл в секции metaverse 
	var controller = new ScrollMagic.Controller({globalSceneOptions: {
    duration: 250,
  }});

	new ScrollMagic.Scene({triggerElement: "#sec1"})
					.setClassToggle("#high1", "active")
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#sec2"})
					.setClassToggle("#high2", "active") 
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#sec3"})
					.setClassToggle("#high3", "active") 
					.addTo(controller);
	new ScrollMagic.Scene({triggerElement: "#sec4"})
					.setClassToggle("#high4", "active")
					.addTo(controller);


  const form = document.querySelector('.form');
  const telSelector = form.querySelector('input[type="tel"]')
  const inputMask = new Inputmask('+7 (999) 999-99-99');
  inputMask.mask(telSelector);
  const inputText = form.querySelector('#partners-name');
  const inputTel = form.querySelector('#partners-phone');
  const inputArea = form.querySelector('#partners-massage');
  const checkbox = form.querySelector('#partners-checkbox');
  const formGroup = form.querySelectorAll('.js-valid');
  

  const validateBtn = form.querySelector('button[type="submit"]');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    
    for (let i=0; i < formGroup.length; i++) {
      if (!formGroup[i].value) {
        const error = form.querySelectorAll('.form__group');
        error.forEach(el => {
          el.classList.add('form--invalid');
        });
      }
    }
  });



  function preloader() {
    const hellopreloader = document.querySelector('.loader');
    const body = document.querySelector('.page__body');
    function fadeOutno(el) {
        el.style.opacity = 1;
        const interhellopreloader = setInterval(function () {
            el.style.opacity = el.style.opacity - 0.05;
            if (el.style.opacity <= 0.05) {
                clearInterval(interhellopreloader);
                hellopreloader.style.display = "none";
                body.classList.remove('scroll')
            }
        }, 16);
    }
    window.onload = function () {
        setTimeout(function () {
            fadeOutno(hellopreloader);
        }, 1000);
    };
  }
  preloader();


 
  window.addEventListener('scroll', videoScroll);
       
  function videoScroll() {
    var windowHeight = window.innerHeight,
        videoEl = document.querySelectorAll('.video-block__item');

    for (var i = 0; i < videoEl.length; i++) {

      var thisVideoEl = videoEl[i],
          videoHeight = thisVideoEl.clientHeight,
          videoClientRect = thisVideoEl.getBoundingClientRect().top;

      if ( videoClientRect <= ( (windowHeight) - (videoHeight*.5) ) && videoClientRect >= ( 0 - ( videoHeight*.5 ) ) ) {
        thisVideoEl.play();
      } else {
        thisVideoEl.pause();
      }

    }

  }
  
  videoScroll();
  const scroller = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smartphone: {smooth: false},
    tablet: {smooth: true},
    
  });

    
    scroller.on('scroll', () => {
      var windowHeight = window.innerHeight,
      videoEl = document.querySelectorAll('.video-block__item');
          for (var i = 0; i < videoEl.length; i++) {
      
            var thisVideoEl = videoEl[i],
                videoHeight = thisVideoEl.clientHeight,
                videoClientRect = thisVideoEl.getBoundingClientRect().top;
      
            if ( videoClientRect <= ( (windowHeight) - (videoHeight*.5) ) && videoClientRect >= ( 0 - ( videoHeight*.5 ) ) ) {
              thisVideoEl.play();
            } else {
              thisVideoEl.pause();
            }
          }
        
    });


  const swiperVert = document.querySelector('.js-metaverse-slider');

  let mySwiper;
  function mobileSwiper() {
    if(swiperVert) {
      if (window.innerWidth >= 1024 && swiperVert.dataset.mobile == 'false') {
        mySwiper = new Swiper (swiperVert, {
          direction: "vertical",
          slidesPerView: 1,
          spaceBetween: 0,
          speed: 700,
          centeredSlides: true,
          mousewheel: true,
          loop: false,
          autoplay: true,
        });
        swiperVert.dataset.mobile = 'true';
       
      }

      if (window.innerWidth < 1024) {
        swiperVert.dataset.mobile = 'false';
    
        if (swiperVert.classList.contains('swiper-initialized')) {
          mySwiper.destroy();
        }
      }
    }
  
  };

 
  mobileSwiper();
  
  window.addEventListener('resize', () => {
    mobileSwiper();
  });


  // scrollStop.onmouseover = scrollStop.onmouseout = handler;

  // function handler(event) {
  
  //   if (event.type == 'mouseover') {
  //     scroller.stop();
  //   }
  //   if (event.type == 'mouseout') {
  //     scroller.start();
  //   }
  // }
 
});
