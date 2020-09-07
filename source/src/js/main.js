import "./slick.js";

function openModal(hrefModal) {

    if ($(hrefModal).length > 0){
		$(hrefModal).trigger('beforeOpenModal').addClass('active');
		
		setTimeout(function() {
			$(hrefModal).addClass('fadeIn').trigger('afterOpenModal');
		}, 50);

		$.fn.fullpage.setAutoScrolling(false);
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

$('.popup-block__slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false
});