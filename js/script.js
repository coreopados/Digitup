
$(document).ready(function () {
   
    AOS.init({
        once: true
    });

    let SwiperRight = new Swiper('.swiper--right', {
        spaceBetween: 0,
        centeredSlides: true,
        speed: 10000,
        autoplay: {
          delay: 1,
        },
        loop: true,
        loopedSlides: 4,
        slidesPerView:'auto',
        allowTouchMove: false,
        disableOnInteraction: true
      });

    let SwiperLeft = new Swiper('.swiper--left', {
        spaceBetween: 0,
        centeredSlides: true,
        speed: 10000,
        autoplay: {
          delay: 1,
        //   reverseDirection: true
        },
        loop: true,
        loopedSlides: 4,
        slidesPerView:'auto',
        allowTouchMove: false,
        disableOnInteraction: true
      });

  
      



    if($('section').hasClass('section-slider')){
        var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal',
            slidesPerView: 'auto',
            centeredSlides: true,
            loopedSlides: 6,
            loop: true,
            spaceBetween: 50,
            mousewheel: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
    
        })
    }

    
    var content = $('.tehnology__content__block');
    var contentArr = [];
    var maxHeightContent ;


    content.each(function(i, elem){
        contentArr.push($(elem).outerHeight())
        maxHeightContent = Math.max.apply(null, contentArr)
    })
    content.css('min-height', maxHeightContent+'px')



    $('.tehnology__tabs__link').on('click', function(){

        $('.tehnology__tabs__link').removeClass('active')

        $(this).addClass('active');

        var activeIndex = $(this).index();


        $('.tehnology__content__block').each(function(i, elem){
            $(elem).children('.tehnology__content__block__img').removeAttr('data-aos')
            $(elem).children('.tehnology__content__block__img').removeClass('aos-animate')
            $(elem).children('.tehnology__content__block__img').removeClass('aos-init')

       
            $(elem).removeClass('active')
          
            if(activeIndex===i){
                $(elem).addClass('active')
                // setTimeout(function(){
                //     $(elem).find('.tehnology__content__block__img').attr('data-aos', 'zoom-in')
                //     $(elem).find('.tehnology__content__block__img').addClass('aos-init')
                //     $(elem).find('.tehnology__content__block__img').addClass('aos-animate')
                   
                // }, 1000)
            }
            
        })
    })

    $('.menu-button').on('click', function(){
        $(this).toggleClass('active')

        if(!$('section').hasClass('section-slider')){
            if($(this).hasClass('active')){
                $('.border-img').removeClass('active')
                $('.white-img').addClass('active')
            }else{
                $('.border-img').addClass('active')
                $('.white-img').removeClass('active')
            }
        }else{
            
            if($(this).hasClass('active')){
                $('.blue-img').removeClass('active')
                $('.white-img').addClass('active')
            }else{
                $('.blue-img').addClass('active')
                $('.white-img').removeClass('active')
            }
        }
       
        $("#menu, .layer, header,html").toggleClass('active')
    })

    $('.layer, header.active').on('click', function(){
        $("#menu, .layer, .menu-button , html , .white-img").removeClass('active')
        $('.border-img').addClass('active')
    })

    $('.language li a').on('click', function(){
        $('.language li a').removeClass('active')
        $(this).addClass('active')
    })

 
    //nosotros
    $('.wrap-steps .step').on('mouseenter', function(){
            $('.wrap-steps .step p').slideUp()
       
            $(this).find('p').slideDown()
   
    })


    $('.select-field').on('click', function(){
        $('.select-field, .drop-down').removeClass('open')
      $(this).toggleClass('open')
      $(this).next().toggleClass('open')
    })
   
 
    $(document).on('click', '.drop-down.open li', function(){
      var text = $(this).text()
      $(this).parent().parent().parent().find('.select-field').text(text)
      $('.drop-down.open').removeClass('open')
    })


})




$(document).mouseup(function (e){ // событие клика по веб-документу
  var div = $(".select-field, .drop-down"); // тут указываем ID элемента
  if (!div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0) { // и не по его дочерним элементам
    div.removeClass('open') // скрываем его
  }
});


let checker = false;

$(document).on('scroll', function(){
       
if(innerWidth>= 576){
    if(pageYOffset>=66){
        $('header').addClass('fixed')
        $('.first-screen-page').addClass('fixed')
    }else{
        $('header').removeClass('fixed')
        $('.first-screen-page').removeClass('fixed')
    }
}else if(innerWidth >= 480 && innerWidth <= 576){
    if(pageYOffset>=20){
        $('header').addClass('fixed')
        $('.first-screen-page').addClass('fixed')
    }else{
        $('header').removeClass('fixed')
        $('.first-screen-page').removeClass('fixed')
    }
}else if(innerWidth <= 480){
    if(pageYOffset>1){
        $('header').addClass('fixed')
        $('.first-screen-page').addClass('fixed')
    }else{
        $('header').removeClass('fixed')
        $('.first-screen-page').removeClass('fixed')
    }
}


    if(checker===false){
        
        if($('.stat').hasClass('aos-animate') && checker===false) {

            checker=true
               
                $('.count__project, .count__years, .count__hours').each(function () {
                var $this = $(this);
                // setTimeout(function(){
                    jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                        duration: 5000,
                        easing: 'swing',
                        step: function () {
                          $this.text(Math.ceil(this.Counter));
                        }
                      });
                // }, 2000)
             
              });
        
        }else{
            checker=false
        }

    }
      
  
})





//cursor
const cursor = document.getElementById('cursor'),
    aura = document.getElementById('aura'),
    links = document.querySelectorAll('a')

var mouseX = 0, mouseY = 0, posX = 0, posY = 0

function coords(e){
    mouseX=e.pageX
    mouseY=e.pageY
}

gsap.to({}, .01, {
repeat: -1,
    onRepeat: ()=>{
        posX += (mouseX - posX) / 2
        posY += (mouseY - posY) / 2
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        })
        gsap.set(aura, {
            css: {
                left: posX - 24,
                top: posY - 24
            }
        })

    }
})


const body = document.querySelector('body');

body.addEventListener('mousemove', e=>{
    coords(e);    
    cursor.classList.remove('hidden')
    aura.classList.remove('hidden')
})


for(let i = 0; i< links.length; i++ ){
    links[i].addEventListener('mouseover', ()=>{
        cursor.classList.add('active')

        if( links[i].classList.contains('circle-arrow') ){
            aura.classList.add('double-active')
        }else if( links[i].classList.contains('tehnology__tabs__link') ){
            links[i].classList.add('hover')
            aura.classList.add('active')
        }else{
            aura.classList.add('active')
        }
        
       
    })
    links[i].addEventListener('mouseout', ()=>{
        cursor.classList.remove('active')
        aura.classList.remove('active')
        aura.classList.remove('double-active')
        links[i].classList.remove('hover')
    })


}

body.addEventListener('mouseout', ()=>{
    cursor.classList.add('hidden')
    aura.classList.add('hidden')
})