(function(){
    
    // navbar & footer button go to section //

    $('.navbar .navbar-nav a, .footer ul li').on('click', function (){

        $('html, body').animate({
            scrollTop : $('.' + $(this).data('nav')).offset().top
        }, 1000)

    })

    // start animation ///////////////////////////////////////////////////////

    $(window).on('scroll', function () {

        // animation in services section//

        if( $(this).scrollTop() > ($('.services').offset().top) -400 ){

            $('.services .card-group .row .col-md-4:nth-of-type(2)').animate({
                opacity : 1,
                top : 0
            },500),

            $('.services .card-group .row .col-md-4').animate({
                opacity : 1,
                left : 0
            },500);

        }

        // animation in about section//

        if( $(this).scrollTop() > ($('.about').offset().top) -532 ){

            $('.about .first .row div:first-child').animate({
                opacity : 1
            },600),

            $('.about .first .row div:last-child').delay(300).animate({
                opacity : 1
            },600)

        }

        if( $(this).scrollTop() > ($('.about').offset().top) -224 ){

            $('.about .second .row div:first-child').animate({
                top : 0,
                opacity : 1
            },600),

            $('.about .second .row div:nth-of-type(2)').delay(500).animate({
                top : 0,
                opacity : 1
            },600)

        }

        if( $(this).scrollTop() > ($('.about').offset().top) +36 ){

            $('.about .second .row div:nth-of-type(3)').animate({
                top : 0,
                opacity : 1
            },600),

            $('.about .second .row div:last-child').delay(500).animate({
                top : 0,
                opacity : 1
            },600)

        }

        // animation in testim section//

        if($(window).scrollTop() > ($('.testim').offset().top) - 572){

            $('.testim h2').animate({
                left : 0 ,
                opacity : 1
            },500)

            $('.testim .row .col-md-4:first-child').delay(400).animate({
                top : 0 ,
                opacity : 1
            },600)

            $('.testim .row .col-md-4:nth-of-type(2)').delay(600).animate({
                top : 0 ,
                opacity : 1
            },600)

            $('.testim .row .col-md-4:last-child').delay(800).animate({
                top : 0 ,
                opacity : 1
            },600)

        }

        // animation in talk section//

        if( $(window).scrollTop() > $('.talk').offset().top - 434 ){

            $('.talk .container').animate({
                opacity : 1,
                left: 0
            },400)

        }

        // animation in contact section//

        if( $(window).scrollTop() > $('.contact').offset().top - 431 ){

            $('.contact .col-md-6:first-child').animate({
                opacity : 1,
            },600)

            $('.contact .col-md-6:last-child').delay(300).animate({
                opacity : 1,
            },600)

        }

    });

    // start OWL carousel in section projects //

        function mediaSize() {

            if (window.matchMedia("(min-width: 768px)").matches) {
                
                $(".owl-carousel").owlCarousel({
                    items : 4,
                    nav : true,
                    dots: false,
                    loop : true
                });
        }}
        
        mediaSize();

    // skip Owl carousel show all project in small screen & don't trigger the Owl carousel //

    $('.project .show').on('click', function(){

        if($(this).text() == 'Show More'){
            $(this).text('Show Less')
        }else{
            $(this).text('Show More')
        }

        

        $('.project .hidden').slideToggle()

    })

    // skip animation in some screen //

    function skipAnimate(){

        if (window.matchMedia('(max-width:1199px)').matches){

            $('.services .card-group .row .col-md-4:nth-of-type(2)').css({
                opacity : 1,
                top : 0
            },500),

            $('.services .card-group .row .col-md-4').css({
                opacity : 1,
                left : 0
            },500);

        }

    }

    skipAnimate()

    // if height > 1023 px ///////////////////////////////////////////////////////

    function AnimateHight(){

        if (window.matchMedia('(min-height:1023px)').matches){

            console.log($('.about').offset().top)

            $(window).on('scroll', function () {

                console.log($(window).scrollTop())

        
                // animation in about section//
        
                if( $(this).scrollTop() > ($('.about').offset().top) - 885 ){
        
                    $('.about .first .row div:first-child').animate({
                        opacity : 1
                    },600),
        
                    $('.about .first .row div:last-child').delay(300).animate({
                        opacity : 1
                    },600)
        
                }
        
                if( $(this).scrollTop() > ($('.about').offset().top) -574 ){
        
                    $('.about .second .row div:first-child').animate({
                        top : 0,
                        opacity : 1
                    },600),
        
                    $('.about .second .row div:nth-of-type(2)').delay(500).animate({
                        top : 0,
                        opacity : 1
                    },600)
        
                }
        
                if( $(this).scrollTop() > ($('.about').offset().top) - 310 ){
        
                    $('.about .second .row div:nth-of-type(3)').animate({
                        top : 0,
                        opacity : 1
                    },600),
        
                    $('.about .second .row div:last-child').delay(500).animate({
                        top : 0,
                        opacity : 1
                    },600)
        
                }
        
                // animation in testim section//
        
                if($(window).scrollTop() > ($('.testim').offset().top) - 922){
        
                    $('.testim h2').animate({
                        left : 0 ,
                        opacity : 1
                    },500)
        
                    $('.testim .row .col-md-4:first-child').delay(400).animate({
                        top : 0 ,
                        opacity : 1
                    },600)
        
                    $('.testim .row .col-md-4:nth-of-type(2)').delay(600).animate({
                        top : 0 ,
                        opacity : 1
                    },600)
        
                    $('.testim .row .col-md-4:last-child').delay(800).animate({
                        top : 0 ,
                        opacity : 1
                    },600)
        
                }
        
                // animation in talk section//
        
                if( $(window).scrollTop() > $('.talk').offset().top - 784 ){
        
                    $('.talk .container').animate({
                        opacity : 1,
                        left: 0
                    },400)
        
                }
        
                // animation in contact section//
        
                if( $(window).scrollTop() > $('.contact').offset().top - 781 ){
        
                    $('.contact .col-md-6:first-child').animate({
                        opacity : 1,
                    },600)
        
                    $('.contact .col-md-6:last-child').delay(300).animate({
                        opacity : 1,
                    },600)
        
                }
        
            });

        }

    }

    AnimateHight()

    // nice scroll ////////////////////////////////////////////

    $('body').niceScroll({
        cursorcolor:"#7f79fc",
        cursorwidth:"11px",
        cursorborder: "none"
    })

}());