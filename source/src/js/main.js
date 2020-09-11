import "./slick.js";

function openModal(hrefModal) {

    if ($(hrefModal).length > 0){
		$(hrefModal).trigger('beforeOpenModal').addClass('active');
		
		setTimeout(function() {
			$(hrefModal).addClass('fadeIn').trigger('afterOpenModal');
		}, 50);

		fullpage_api.setAllowScrolling(false);
    }

}

function closeAllModals() {
	$('.popup-block.active').trigger('beforeCloseModal').removeClass('fadeIn');
	
	setTimeout(function() {
		$('.popup-block.active').removeClass('active', function() {
		}).trigger('afterCloseModal');
	}, 200);
	
}

function closeModal(hrefModal) {
	$(hrefModal).trigger('beforeCloseModal').removeClass('fadeIn');
	
	setTimeout(function() {
		$(hrefModal).removeClass('active', function() {
		}).trigger('afterCloseModal');
	}, 200);

	fullpage_api.setAllowScrolling(true);

}

$(document).keydown(function(event) { 
	if (event.keyCode == 27) { 
		closeAllModals();
	}
});

// Switch Modal function
$(document.body).on('click','[data-toggle="switch-modal"]',function(e) {
	e.preventDefault();
	
	var hrefModal = $(this).attr('data-target');
	
	$('.popup-block:not(:hidden)').removeClass('fadeIn active');
	
	$(hrefModal).addClass('active').addClass('fadeIn').scrollTop(0);
    
});

// Basic open modal
$(document.body).on('click','[data-toggle="modal"]',function(e) {
	e.preventDefault();
	
	var hrefModal = $(this).attr('data-target');
	
	openModal(hrefModal);
});

// Close modals if clicked on popup overlay
$(document.body).on('click','.popup-block__overlay',function(e) {
	var closeButton = $(this).children('[data-toggle="modal-dismiss"]');
	
	if (!(e.target != this)) {
		closeModal($(this).parents('.popup-block')[0]);
	}
});

// Attribute for closing modals
$(document.body).on('click','[data-toggle="modal-dismiss"]',function(e) {
	e.preventDefault();
	
	closeModal($(this).parents('.popup-block')[0]);
});

if ($('.popup-block__slider').length > 0) {
	$('.popup-block__slider').each(function() {
		var thisElem = $(this);

		var thisElemSlidesCount = $(this).children().length;

		var thisAllCountBlock = $(this).parents('.popup-block__slider-wrapper').find('.info-block__switch').find('.all-count');
		var thisCurrentCountBlock = $(this).parents('.popup-block__slider-wrapper').find('.info-block__switch').find('.current');
		

		$(thisCurrentCountBlock).text('1');
		$(thisAllCountBlock).text(thisElemSlidesCount);

		$(thisElem).slick({
			slidesToShow: 1,
			infinite: true,
			arrows: true,
			prevArrow: '<a href="javascript:;" class="footer__portfolio-back prev"><img src="img/sliderArrowRightBlue.svg"></img></a>',
			nextArrow: '<a href="javascript:;" class="footer__portfolio-forward next"><img src="img/sliderArrowRightBlue.svg"></img></a>',
			dots: false,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						arrows: true,
						dots: false,
						adaptiveHeight: true
					}
				}
			]
		});

		$(thisElem).on('afterChange', function(e, slick, currentSlide) {
			$(thisCurrentCountBlock).text(currentSlide + 1);
		});
	});
}

if ($('.section__blog-articles-inner').length > 0) {
	$('.section__blog-articles-inner').each(function() {
		var thisElem = $(this);

		var thisElemSlidesCount = $(this).children().length;

		var thisAllCountBlock = $(this).parents('.section__blog-articles').find('.portfolio__switch').find('.all-count');
		var thisCurrentCountBlock = $(this).parents('.section__blog-articles').find('.portfolio__switch').find('.current');


		var thisElemSlidesCountPages = parseInt(thisElemSlidesCount / 3); 

		$(thisCurrentCountBlock).text('1');
		$(thisAllCountBlock).text(thisElemSlidesCountPages);

		
		if ($(window).width() < 768) {
			thisElemSlidesCountPages = thisElemSlidesCount;
			$(thisAllCountBlock).text(thisElemSlidesCount);
		}
		
		$(thisElem).slick({
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			arrows: true,
			prevArrow: '<a href="javascript:;" class="footer__portfolio-back prev"><img src="img/sliderArrowRightBlue.svg"></img></a>',
			nextArrow: '<a href="javascript:;" class="footer__portfolio-forward next"><img src="img/sliderArrowRightBlue.svg"></img></a>',
			dots: false,
			responsive: [
				{
					breakpoint: 1025,
					settings: 'unslick'
				}
			]
		});

		$(thisElem).on('afterChange', function(e, slick, currentSlide) {
			$(thisCurrentCountBlock).text(currentSlide + 1);
		});
	});
}

if ($('.section__blog-articles-inner-two').length > 0) {
	$('.section__blog-articles-inner-two').each(function() {
		var thisElem = $(this);

		var thisElemSlidesCount = $(this).children().length;

		var thisAllCountBlock = $(this).parents('.section__blog-articles').find('.portfolio__switch').find('.all-count');
		var thisCurrentCountBlock = $(this).parents('.section__blog-articles').find('.portfolio__switch').find('.current');


		$(thisCurrentCountBlock).text('1');
		$(thisAllCountBlock).text(thisElemSlidesCount);

		$(thisElem).slick({
			slidesToShow: 2,
			slidesToScroll: 2,
			infinite: true,
			arrows: true,
			prevArrow: '<a href="javascript:;" class="footer__portfolio-back prev"><img src="img/sliderArrowRightBlue.svg"></img></a>',
			nextArrow: '<a href="javascript:;" class="footer__portfolio-forward next"><img src="img/sliderArrowRightBlue.svg"></img></a>',
			dots: false,
			responsive: [
				{
					breakpoint: 1025,
					settings: 'unslick'
				}
			]
		});

		$(thisElem).on('afterChange', function(e, slick, currentSlide) {
			$(thisCurrentCountBlock).text(currentSlide + 1);
		});
	});
}

if ($('.portfolio__items-inner').length > 0) {
	$('.portfolio__items-inner').each(function() {
		var thisElem = $(this);

		var thisElemSlidesCount = $(this).children().length;

		var thisAllCountBlock = $(this).parents('.portfolio__items').find('.portfolio__switch').find('.all-count');
		var thisCurrentCountBlock = $(this).parents('.portfolio__items').find('.portfolio__switch').find('.current');


		$(thisCurrentCountBlock).text('1');
		$(thisAllCountBlock).text(thisElemSlidesCount);

		$(thisElem).slick({
			slidesToShow: 4,
			slidesToScroll: 4,
			infinite: true,
			arrows: true,
			prevArrow: '<a href="javascript:;" class="footer__portfolio-back prev"><img src="img/sliderArrowRightBlue.svg"></img></a>',
			nextArrow: '<a href="javascript:;" class="footer__portfolio-forward next"><img src="img/sliderArrowRightBlue.svg"></img></a>',
			dots: false,
			responsive: [
				{
					breakpoint: 1025,
					settings: 'unslick'
				}
			]
		});

		$(thisElem).on('afterChange', function(e, slick, currentSlide) {
			$(thisCurrentCountBlock).text(currentSlide + 1);
		});
	});
}

if ($('.reviews-block__row').length > 0) {
	$('.reviews-block__row').each(function() {
		var thisElem = $(this);

		var thisElemSlidesCount = $(this).children().length;

		var thisAllCountBlock = $(this).parents('.reviews-block__wrapper').find('.reviews-block__switch').find('.all-count');
		var thisCurrentCountBlock = $(this).parents('.reviews-block__wrapper').find('.reviews-block__switch').find('.current');


		$(thisCurrentCountBlock).text('1');
		$(thisAllCountBlock).text(thisElemSlidesCount);

		$(thisElem).slick({
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			arrows: true,
			prevArrow: '<a href="javascript:;" class="footer__portfolio-back prev"><img src="img/sliderArrowRightBlue.svg"></img></a>',
			nextArrow: '<a href="javascript:;" class="footer__portfolio-forward next"><img src="img/sliderArrowRightBlue.svg"></img></a>',
			dots: false,
			responsive: [
				{
					breakpoint: 1025,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 399,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});

		$(thisElem).on('afterChange', function(e, slick, currentSlide) {
			$(thisCurrentCountBlock).text(currentSlide + 1);
		});
	});
}

if ($('.coordinator-block__slider-wrapper').length > 0) {
	$('.coordinator-block__slider-wrapper').each(function() {
		var thisElem = $(this);

		var thisElemSlidesCount = $(this).children().length;

		var thisAllCountBlock = $(this).parents('.coordinator-block__slider').find('.coordinator-block__switch').find('.all-count');
		var thisCurrentCountBlock = $(this).parents('.coordinator-block__slider').find('.coordinator-block__switch').find('.current');


		$(thisCurrentCountBlock).text('1');
		$(thisAllCountBlock).text(thisElemSlidesCount);

		$(thisElem).slick({
			slidesToShow: 2,
			slidesToScroll: 2,
			infinite: true,
			arrows: true,
			prevArrow: '<a href="javascript:;" class="footer__portfolio-back prev"><img src="img/sliderArrowRightBlue.svg"></img></a>',
			nextArrow: '<a href="javascript:;" class="footer__portfolio-forward next"><img src="img/sliderArrowRightBlue.svg"></img></a>',
			dots: false,
			responsive: [
				{
					breakpoint: 1025,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 399,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});

		$(thisElem).on('afterChange', function(e, slick, currentSlide) {
			$(thisCurrentCountBlock).text(currentSlide + 1);
		});
	});
}


