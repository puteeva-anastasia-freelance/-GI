import '/app/libs/selectize/dist/js/standalone/selectize.min.js'
import '/app/libs/jquery.maskedinput/dist/jquery.maskedinput.min.js'
import '/app/libs/swiper/swiper-bundle.min.js'
import '/app/libs/jQuery.equalHeights/jquery.equalheights.js'

document.addEventListener('DOMContentLoaded', () => {

	$('.main-header__menu').click(function () {
		$('.main-header__menu-wrap').toggleClass('open');
	});

	$('.main-header__menu-close').click(function () {
		$('.main-header__menu-wrap').toggleClass('open');
	});

	$('.card__more').click(function () {
		$('.card__detailed').toggleClass('open');
		$('.card__more-icon').toggleClass('down');
	});

	$("#country").change(function () {
		if (this.value != 'Россия') {
			$('.ordering__wrap-reg-select').addClass('close');
			$('.ordering__wrap-reg-input').addClass('open');
		} else {
			$('.ordering__wrap-reg-select').removeClass('close');
			$('.ordering__wrap-reg-input').removeClass('open');
		}
	});

	var bannersSwiper = new Swiper('#banners-slider', {
		speed: 1200,
		loop: true,
		/*autoplay: {
			delay: 5000,
		},*/
		slidesPerView: 'auto',
		autoHeight: true,
		pagination: {
			el: '.banners__pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.banners__button-next',
			prevEl: '.banners__button-prev',
		},
	})

	/*$("#banners-slider").mouseenter(function () {
		bannersSwiper.autoplay.stop();
	});

	$("#banners-slider").mouseleave(function () {
		bannersSwiper.autoplay.start();
	});*/

	var recSwiper = new Swiper('#rec-slider', {
		loop: true,
		navigation: {
			nextEl: '.rec-swiper-button-next',
			prevEl: '.rec-swiper-button-prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			360: {
				slidesPerView: 2,
				spaceBetween: 25,
			},
			576: {
				slidesPerView: 3,
				spaceBetween: 25,
			},
			768: {
				slidesPerView: 4,
				spaceBetween: 25,
			},
		}
	})

	var reviewsSwiper = new Swiper('#reviews-slider', {
		speed: 500,
		loop: true,
		autoHeight: true,
		pagination: {
			el: '.reviews__pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.reviews__button-next',
			prevEl: '.reviews__button-prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 2,
				initialSlide: 1
			},
			576: {
				slidesPerView: 4,
			}
		}
	})

	var galleryThumbs = new Swiper('.gallery-thumbs', {
		spaceBetween: 20,
		loop: true,
		freeMode: true,
		loopedSlides: 5, //looped slides should be the same
		watchSlidesProgress: true,
		breakpoints: {
			320: {
				slidesPerView: 3,
			},
			993: {
				slidesPerView: 4,
			},
		},
	});

	var galleryTop = new Swiper('.gallery-top', {
		spaceBetween: 10,
		loop: true,
		loopedSlides: 5, //looped slides should be the same
		thumbs: {
			swiper: galleryThumbs,
		},
		navigation: {
			nextEl: '.swiper-button-next-thumbs',
			prevEl: '.swiper-button-prev-thumbs',
		},
		pagination: {
			el: '.card__pagination',
			clickable: true,
		},
	});

	$('.choose-quantity__button.minus').click(function () {
		let $input = $(this).parent().find('.choose-quantity__input');
		let count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
	});
	$('.choose-quantity__button.plus').click(function () {
		let $input = $(this).parent().find('.choose-quantity__input');
		let count = parseInt($input.val()) + 1;
		count = count > parseInt($input.data('max-count')) ? parseInt($input.data('max-count')) : count;
		$input.val(parseInt(count));
	});
	$('.choose-quantity__input').bind("change keyup input click", function () {
		if (this.value.match(/[^0-9]/g)) {
			this.value = this.value.replace(/[^0-9]/g, '');
		}
		if (this.value == "") {
			this.value = 1;
		}
		if (this.value > parseInt($(this).data('max-count'))) {
			this.value = parseInt($(this).data('max-count'));
		}
	});

	$('.mask-phone').mask('+9999999999?99');

	$('#country').selectize();

	$('#region').selectize();

	$("#message").keyup(function (e) {
		$(this).height(30);
		$(this).height(this.scrollHeight + parseFloat($(this).css("borderTopWidth")) + parseFloat($(this).css("borderBottomWidth")));
	});

	var dt = new DataTransfer();

	$('.input-file input[type=file]').on('change', function () {
		let $files_list = $(this).closest('.input-file').next();
		$files_list.empty();

		for (var i = 0; i < this.files.length; i++) {
			let new_file_input = '<div class="contact-us__file-item">' +
				'<span class="input-file-list-name">' + this.files.item(i).name + '</span>' +
				'</div>';
			$files_list.append(new_file_input);
			dt.items.add(this.files.item(i));
		};
		this.files = dt.files;
	});

	$('.main-header__menu-link').click(function () {
		$('.main-header__menu-wrap').toggleClass('open');
	});

	$('.banners__slide').equalHeights();

	// Обновить страницу при смене ширины экрана
	var windowWidth = window.innerWidth;
	window.onresize = function () {
		var newWindowWidth = window.innerWidth;
		if (newWindowWidth != windowWidth) {
			windowWidth = newWindowWidth;
			location.reload();
		}
	};

	if ($(window).width() <= 768) {
		$('.basket__promocode-input').attr('placeholder', 'Введите скидочный код');
	} else if ($(window).width() <= 1600) {
		$('.basket__promocode-input').attr('placeholder', 'Введите ваш скидочный код');
	} else {
		$('.basket__promocode-input').attr('placeholder', 'Введите ваш скидочный код, чтобы получить скидку');
	}

	if ($(window).width() <= 450) {
		$('.transitions__link-in-shop').text('Вернуться');
	}
	
	if ($(window).width() <= 992) {
		$('.contact-us__title').text('Напишите нам');
	}

})