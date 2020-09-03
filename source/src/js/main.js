// function openModal(hrefModal) {

//     if ($(hrefModal).length > 0){
// 		$(hrefModal).trigger('beforeOpenModal').addClass('active');
		
// 		setTimeout(function() {
// 			$(hrefModal).addClass('fadeIn').trigger('afterOpenModal');
// 		}, 50);
    
//         // bodyScrollLock.clearAllBodyScrollLocks();
//         // bodyScrollLock.disableBodyScroll(hrefModal, bodyScrollOptions);
//     }

// }

// function closeAllModals() {
// 	$('.popup-block.active').trigger('beforeCloseModal').removeClass('fadeIn');
	
// 	setTimeout(function() {
// 		$('.popup-block.active').removeClass('active', function() {
// 			// bodyScrollLock.clearAllBodyScrollLocks();
// 		}).trigger('afterCloseModal');

// 		// bodyScrollLock.clearAllBodyScrollLocks();
// 	}, 200);
// }

// function closeModal(hrefModal) {
// 	$(hrefModal).trigger('beforeCloseModal').removeClass('fadeIn');
	
// 	setTimeout(function() {
// 		$(hrefModal).removeClass('active', function() {
// 			// bodyScrollLock.clearAllBodyScrollLocks();
// 		}).trigger('afterCloseModal');

// 		// bodyScrollLock.clearAllBodyScrollLocks();
// 	}, 200);
// }

// $(document).keydown(function(event) { 
// 	if (event.keyCode == 27) { 
// 		closeAllModals();
// 	}
// });

// // Switch Modal function
// $(document.body).on('click','[data-toggle="switch-modal"]',function(e) {
// 	e.preventDefault();
	
// 	var hrefModal = $(this).attr('data-target');
	
// 	$('.popup-block:not(:hidden)').removeClass('fadeIn active');
	
// 	$(hrefModal).addClass('active').addClass('fadeIn').scrollTop(0);
    
// 	// bodyScrollLock.disableBodyScroll($(hrefModal)[0], bodyScrollOptions);
	
// });

// // Basic open modal
// $(document.body).on('click','[data-toggle="modal"]',function(e) {
// 	e.preventDefault();
	
// 	var hrefModal = $(this).attr('data-target');
	
// 	openModal(hrefModal);
// });

// // Close modals if clicked on popup overlay
// $(document.body).on('click','.popup-block__overlay',function(e) {
// 	var closeButton = $(this).children('[data-toggle="modal-dismiss"]');
	
// 	if (!(e.target != this)) {
// 		closeModal($(this).parents('.popup-block')[0]);
// 	}
// });

// // Attribute for closing modals
// $(document.body).on('click','[data-toggle="modal-dismiss"]',function(e) {
// 	e.preventDefault();
	
// 	closeModal($(this).parents('.popup-block')[0]);
// });
