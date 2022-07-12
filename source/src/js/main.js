import "./slick.js";
import "./select2.js";
import "./datepicker";

function openModal(hrefModal) {

	if ($(hrefModal).length > 0) {
		$(hrefModal).trigger('beforeOpenModal').addClass('active');

		setTimeout(function () {
			$(hrefModal).addClass('fadeIn').trigger('afterOpenModal');
		}, 50);

		fullpage_api.setAllowScrolling(false);
	}

}

function closeAllModals() {
	$('.popup-block.active').trigger('beforeCloseModal').removeClass('fadeIn');

	setTimeout(function () {
		$('.popup-block.active').removeClass('active', function () {
		}).trigger('afterCloseModal');
	}, 200);

}

function closeModal(hrefModal) {
	$(hrefModal).trigger('beforeCloseModal').removeClass('fadeIn');
	console.log(hrefModal);
	var tempVideoEl = hrefModal.querySelector('video')
	if (tempVideoEl) {
		tempVideoEl.pause();
	}

	setTimeout(function () {
		$(hrefModal).removeClass('active', function () {
		}).trigger('afterCloseModal');
	}, 200);

	fullpage_api.setAllowScrolling(true);

}

$(document).keydown(function (event) {
	if (event.keyCode == 27) {
		closeAllModals();
	}
});

// Switch Modal function
$(document.body).on('click', '[data-toggle="switch-modal"]', function (e) {
	e.preventDefault();

	var hrefModal = $(this).attr('data-target');

	$('.popup-block:not(:hidden)').removeClass('fadeIn active');

	$(hrefModal).addClass('active').addClass('fadeIn').scrollTop(0);

});

// Basic open modal
$(document.body).on('click', '[data-toggle="modal"]', function (e) {
	e.preventDefault();

	var hrefModal = $(this).attr('data-target');

	openModal(hrefModal);
});

// Close modals if clicked on popup overlay
$(document.body).on('click', '.popup-block__overlay', function (e) {
	var closeButton = $(this).children('[data-toggle="modal-dismiss"]');

	if (!(e.target != this)) {
		closeModal($(this).parents('.popup-block')[0]);
	}
});

// Attribute for closing modals
$(document.body).on('click', '[data-toggle="modal-dismiss"]', function (e) {
	e.preventDefault();
	closeModal($(this).parents('.popup-block')[0]);
});

$(document.body).on('click', '[data-menu-open]', function (e) {
	e.preventDefault();

	closeModal('.popup-block').hide();
});

if ($('.popup-block__slider').length > 0) {
	$('.popup-block__slider').each(function () {
		var thisElem = $(this);

		var thisElemSlidesCount = $(this).children().length;

		var thisAllCountBlock = $(this).parents('.popup-block__slider-wrapper').find('.info-block__switch').find('.all-count');
		var thisCurrentCountBlock = $(this).parents('.popup-block__slider-wrapper').find('.info-block__switch').find('.current');


		$(thisCurrentCountBlock).text('1');
		$(thisAllCountBlock).text(thisElemSlidesCount);
		var sliderPrevArrowImg = $(thisElem).attr('data-prev-arrow-img');
		var sliderNextArrowImg = $(thisElem).attr('data-next-arrow-img');

		$(thisElem).slick({
			slidesToShow: 1,
			infinite: false,
			arrows: true,
			prevArrow: '<a href="javascript:;" class="footer__portfolio-back prev"><img src="' + sliderPrevArrowImg + '"></img></a>',
			nextArrow: '<a href="javascript:;" class="footer__portfolio-forward next"><img src="' + sliderNextArrowImg + '"></img></a>',
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

		$(thisElem).on('afterChange', function (e, slick, currentSlide) {
			$(thisCurrentCountBlock).text(currentSlide + 1);
		});
	});
}

if ($('.section__blog-articles-inner').length > 0) {
	$('.section__blog-articles-inner').each(function () {
		var thisElem = $(this);

		var thisElemSlidesCount = $(this).children().length;

		var thisAllCountBlock = $(this).parents('.section__blog-articles').find('.portfolio__switch').find('.all-count');
		var thisCurrentCountBlock = $(this).parents('.section__blog-articles').find('.portfolio__switch').find('.current');


		var thisElemSlidesCountPages = Math.ceil(thisElemSlidesCount / 3);
		var slidesToShowVal = 3;
		var sliderPrevArrowImg = $(thisElem).attr('data-prev-arrow-img');
		var sliderNextArrowImg = $(thisElem).attr('data-next-arrow-img');

		$(thisCurrentCountBlock).text('1');
		$(thisAllCountBlock).text(thisElemSlidesCountPages);


		if ($(window).width() < 768) {
			thisElemSlidesCountPages = thisElemSlidesCount;
			$(thisAllCountBlock).text(thisElemSlidesCount);
			slidesToShowVal = 1;
		}


		$(thisElem).slick({
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: false,
			arrows: true,
			prevArrow: '<a href="javascript:;" class="footer__portfolio-back prev"><img src="' + sliderPrevArrowImg + '"></img></a>',
			nextArrow: '<a href="javascript:;" class="footer__portfolio-forward next"><img src="' + sliderNextArrowImg + '"></img></a>',
			dots: false,
			responsive: [
				{
					breakpoint: 1025,
					settings: 'unslick'
				}
			]
		});

		$(thisElem).on('afterChange', function (e, slick, currentSlide) {
			$(thisCurrentCountBlock).text(parseInt(currentSlide / slidesToShowVal) + 1);
		});

	});
}

if ($('.section__blog-articles-inner-two').length > 0) {
	$('.section__blog-articles-inner-two').each(function () {
		var thisElem = $(this);

		var thisElemSlidesCount = $(this).children().length;

		var thisAllCountBlock = $(this).parents('.section__blog-articles').find('.portfolio__switch').find('.all-count');
		var thisCurrentCountBlock = $(this).parents('.section__blog-articles').find('.portfolio__switch').find('.current');


		var thisElemSlidesCountPages = Math.ceil(thisElemSlidesCount / 2);
		var slidesToShowVal = 2;
		var sliderPrevArrowImg = $(thisElem).attr('data-prev-arrow-img');
		var sliderNextArrowImg = $(thisElem).attr('data-next-arrow-img');

		$(thisCurrentCountBlock).text('1');
		$(thisAllCountBlock).text(thisElemSlidesCountPages);


		if ($(window).width() < 768) {
			thisElemSlidesCountPages = thisElemSlidesCount;
			$(thisAllCountBlock).text(thisElemSlidesCount);
			slidesToShowVal = 1;
		}

		$(thisElem).slick({
			slidesToShow: 2,
			slidesToScroll: 2,
			infinite: false,
			arrows: true,
			prevArrow: '<a href="javascript:;" class="footer__portfolio-back prev"><img src="' + sliderPrevArrowImg + '"></img></a>',
			nextArrow: '<a href="javascript:;" class="footer__portfolio-forward next"><img src="' + sliderNextArrowImg + '"></img></a>',
			dots: false,
			responsive: [
				{
					breakpoint: 1025,
					settings: 'unslick'
				}
			]
		});

		$(thisElem).on('afterChange', function (e, slick, currentSlide) {
			$(thisCurrentCountBlock).text(parseInt(currentSlide / slidesToShowVal) + 1);
		});
	});
}

if ($('.portfolio__items-inner').length > 0) {
	$('.portfolio__items-inner').each(function () {
		var thisElem = $(this);

		var thisElemSlidesCount = $(this).children().length;

		var thisAllCountBlock = $(this).parents('.portfolio__items').find('.portfolio__switch').find('.all-count');
		var thisCurrentCountBlock = $(this).parents('.portfolio__items').find('.portfolio__switch').find('.current');

		var slidesToShowVal = 2;
		var thisElemSlidesCountPages = Math.ceil(thisElemSlidesCount / slidesToShowVal);
		var sliderPrevArrowImg = $(thisElem).attr('data-prev-arrow-img');
		var sliderNextArrowImg = $(thisElem).attr('data-next-arrow-img');

		$(thisCurrentCountBlock).text('1');
		$(thisAllCountBlock).text(thisElemSlidesCountPages);


		if ($(window).width() < 768) {
			thisElemSlidesCountPages = thisElemSlidesCount;
			$(thisAllCountBlock).text(thisElemSlidesCount);
			slidesToShowVal = 1;
		}

		$(thisElem).slick({
			slidesToShow: slidesToShowVal,
			slidesToScroll: slidesToShowVal,
			infinite: false,
			arrows: true,
			prevArrow: '<a href="javascript:;" class="footer__portfolio-back prev"><img src="' + sliderPrevArrowImg + '"></img></a>',
			nextArrow: '<a href="javascript:;" class="footer__portfolio-forward next"><img src="' + sliderNextArrowImg + '"></img></a>',
			dots: false,
			responsive: [
				{
					breakpoint: 1025,
					settings: 'unslick'
				}
			]
		});

		$(thisElem).on('afterChange', function (e, slick, currentSlide) {
			$(thisCurrentCountBlock).text(parseInt(currentSlide / slidesToShowVal) + 1);
		});
	});
}

if ($('.portfolio__items-inner-half').length > 0) {
	$('.portfolio__items-inner-half').each(function () {
		var thisElem = $(this);

		var thisElemSlidesCount = $(this).children().length;

		var thisAllCountBlock = $(this).parents('.portfolio__items').find('.portfolio__switch').find('.all-count');
		var thisCurrentCountBlock = $(this).parents('.portfolio__items').find('.portfolio__switch').find('.current');

		var thisElemSlidesCountPages = Math.ceil(thisElemSlidesCount / 2);
		var slidesToShowVal = 2;
		var sliderPrevArrowImg = $(thisElem).attr('data-prev-arrow-img');
		var sliderNextArrowImg = $(thisElem).attr('data-next-arrow-img');

		$(thisCurrentCountBlock).text('1');
		$(thisAllCountBlock).text(thisElemSlidesCountPages);


		if ($(window).width() < 768) {
			thisElemSlidesCountPages = thisElemSlidesCount;
			$(thisAllCountBlock).text(thisElemSlidesCount);
			slidesToShowVal = 1;
		}

		$(thisElem).slick({
			slidesToShow: 2,
			slidesToScroll: 2,
			infinite: false,
			arrows: true,
			prevArrow: '<a href="javascript:;" class="footer__portfolio-back prev"><img src="' + sliderPrevArrowImg + '"></img></a>',
			nextArrow: '<a href="javascript:;" class="footer__portfolio-forward next"><img src="' + sliderNextArrowImg + '"></img></a>',
			dots: false,
			responsive: [
				{
					breakpoint: 1025,
					settings: 'unslick'
				}
			]
		});

		$(thisElem).on('afterChange', function (e, slick, currentSlide) {
			$(thisCurrentCountBlock).text(parseInt(currentSlide / slidesToShowVal) + 1);
		});
	});
}

if ($('.portfolio__video-items-inner').length > 0) {
	$('.portfolio__video-items-inner').each(function () {
		var thisElem = $(this);

		var thisElemSlidesCount = $(this).children().length;

		var thisAllCountBlock = $(this).parents('.portfolio__video-items').find('.portfolio__switch').find('.all-count');
		var thisCurrentCountBlock = $(this).parents('.portfolio__video-items').find('.portfolio__switch').find('.current');

		var thisElemSlidesCountPages = Math.ceil(thisElemSlidesCount / 2);
		var slidesToShowVal = 1;
		var sliderPrevArrowImg = $(thisElem).attr('data-prev-arrow-img');
		var sliderNextArrowImg = $(thisElem).attr('data-next-arrow-img');

		$(thisCurrentCountBlock).text('1');
		$(thisAllCountBlock).text(thisElemSlidesCountPages);


		if ($(window).width() < 768) {
			thisElemSlidesCountPages = thisElemSlidesCount;
			$(thisAllCountBlock).text(thisElemSlidesCount);
			slidesToShowVal = 1;
		}

		$(thisElem).slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: false,
			arrows: true,
			prevArrow: '<a href="javascript:;" class="footer__portfolio-back prev"><img src="' + sliderPrevArrowImg + '"></img></a>',
			nextArrow: '<a href="javascript:;" class="footer__portfolio-forward next"><img src="' + sliderNextArrowImg + '"></img></a>',
			dots: false,
			responsive: [
				{
					breakpoint: 1025,
					settings: 'unslick'
				}
			]
		});

		$(thisElem).on('afterChange', function (e, slick, currentSlide) {
			$(thisCurrentCountBlock).text(parseInt(currentSlide / slidesToShowVal) + 1);
		});
	});
}


if ($('.reviews-block__row').length > 0) {
	$('.reviews-block__row').each(function () {
		var thisElem = $(this);

		var thisElemSlidesCount = $(this).children().length;

		var thisAllCountBlock = $(this).parents('.reviews-block__wrapper').find('.reviews-block__switch').find('.all-count');
		var thisCurrentCountBlock = $(this).parents('.reviews-block__wrapper').find('.reviews-block__switch').find('.current');


		var thisElemSlidesCountPages = Math.ceil(thisElemSlidesCount / 3);
		var slidesToShowVal = 3;
		var sliderPrevArrowImg = $(thisElem).attr('data-prev-arrow-img');
		var sliderNextArrowImg = $(thisElem).attr('data-next-arrow-img');

		$(thisCurrentCountBlock).text('1');
		$(thisAllCountBlock).text(thisElemSlidesCountPages);


		if ($(window).width() < 1024) {
			thisElemSlidesCountPages = Math.ceil(thisElemSlidesCount / 2);
			$(thisAllCountBlock).text(thisElemSlidesCountPages);
			slidesToShowVal = 2;
		}

		if ($(window).width() < 401) {
			thisElemSlidesCountPages = thisElemSlidesCount;
			$(thisAllCountBlock).text(thisElemSlidesCount);
			slidesToShowVal = 1;
		}

		$(thisElem).slick({
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: false,
			arrows: true,
			prevArrow: '<a href="javascript:;" class="footer__portfolio-back prev"><img src="' + sliderPrevArrowImg + '"></img></a>',
			nextArrow: '<a href="javascript:;" class="footer__portfolio-forward next"><img src="' + sliderNextArrowImg + '"></img></a>',
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

		$(thisElem).on('afterChange', function (e, slick, currentSlide) {
			$(thisCurrentCountBlock).text(parseInt(currentSlide / slidesToShowVal) + 1);
		});
	});
}

if ($('.coordinator-block__slider-wrapper').length > 0) {
	$('.coordinator-block__slider-wrapper').each(function () {
		var thisElem = $(this);

		var thisElemSlidesCount = $(this).children().length;

		var thisAllCountBlock = $(this).parents('.coordinator-block__slider').find('.coordinator-block__switch').find('.all-count');
		var thisCurrentCountBlock = $(this).parents('.coordinator-block__slider').find('.coordinator-block__switch').find('.current');


		var thisElemSlidesCountPages = Math.ceil(thisElemSlidesCount / 2);
		var slidesToShowVal = 2;
		var sliderPrevArrowImg = $(thisElem).attr('data-prev-arrow-img');
		var sliderNextArrowImg = $(thisElem).attr('data-next-arrow-img');

		$(thisCurrentCountBlock).text('1');
		$(thisAllCountBlock).text(thisElemSlidesCountPages);


		if ($(window).width() < 400) {
			thisElemSlidesCountPages = thisElemSlidesCount;
			$(thisAllCountBlock).text(thisElemSlidesCount);
			slidesToShowVal = 1;
		}

		$(thisElem).slick({
			slidesToShow: 2,
			slidesToScroll: 2,
			infinite: false,
			arrows: true,
			prevArrow: '<a href="javascript:;" class="footer__portfolio-back prev"><img src="' + sliderPrevArrowImg + '"></img></a>',
			nextArrow: '<a href="javascript:;" class="footer__portfolio-forward next"><img src="' + sliderNextArrowImg + '"></img></a>',
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


		$(thisElem).on('afterChange', function (e, slick, currentSlide) {
			$(thisCurrentCountBlock).text(parseInt(currentSlide / slidesToShowVal) + 1);
		});
	});
}

$('.modal__open').on('click', function () {
	var SlideNum = $(this).parent().attr('data-popup-index');

	$('.popup-block__slider').slick('slickGoTo', parseInt(SlideNum));
});

$('.reviews-block__more').on('click', function () {
	var SlideNum = $(this).parent().attr('data-popup-index');

	$('.popup-block__slider').slick('slickGoTo', parseInt(SlideNum));
});

$(document).ready(function () {
	$('.modal__open').click(function (e) {
		e.preventDefault();

		if ($(window).width() > 767) {
			var thisTarget = $(this).attr('data-target');
			openModal(thisTarget);
		}

		if ($(window).width() < 767) {
			$(this).parent().toggleClass('active');
			$(this).parent().find('.info-block__mob-content').slideToggle(200);
			$(this).toggleClass('active');
		}
	});


});



$('.popup-block__img-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	infinite: false,
	arrows: false,
	dots: false,
	swipe: false
});

$('.map__scheme-imgs-item').on('click', function () {
	var SlideNum = $(this).attr('data-popup-index');

	$('.popup-block__img-slider').slick('slickGoTo', parseInt(SlideNum));
});

if ($('.footer-slide__recommends-row').length > 0) {
	$('.footer-slide__recommends-row').each(function () {
		var thisElem = $(this);

		var sliderPrevArrowImg = $(thisElem).attr('data-prev-arrow-img');
		var sliderNextArrowImg = $(thisElem).attr('data-next-arrow-img');

		$(thisElem).slick({
			slidesToShow: 3,
			slidesToScroll: 3,
			infinite: true,
			arrows: true,
			dots: true,
			prevArrow: '<a href="javascript:;" class="footer-slide__arrow-back prev"><img src="' + sliderPrevArrowImg + '"></img></a>',
			nextArrow: '<a href="javascript:;" class="footer-slide__arrow-forward next"><img src="' + sliderNextArrowImg + '"></img></a>'
		});
	});
}

$('.select').select2({
	width: '100%',
	minimumResultsForSearch: -1,
	dropdownAutoWidth: true,
	placeholder: function () {
		$(this).data('placeholder');
	}
});

$('#datepicker').datepicker({
	autoClose: true
});

$('.form-with-submit-validation input[required]').on('input change keyup', function () {
	var thisForm = $(this).parents('form');

	if (allFilled(thisForm)) {
		$(thisForm).find('button[type="submit"]').removeAttr('disabled');
	} else {
		$(thisForm).find('button[type="submit"]').attr('disabled', 'disabled');
	}
});

function allFilled(form) {
	var filled = true;

	$(form).find('input[required]').each(function () {
		if ($(this).val() == '') {
			filled = false;
		}
	});

	return filled;
}
