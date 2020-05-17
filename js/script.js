$('.slick').slick({
	dots: true,
	slidesToShow: 4,
	slidesToScroll: 2,
})

$(document).ready(function () {
	$('.box').click(function (e) {
		var index = $('.box').index(this)
		$('.pop-up').eq(index).addClass('pop-up-block')

		if ($('.pop-up').eq(3)) {
			$(window).trigger('resize')
		}
	})

	$('.close-btn').click(function (e) {
		$('.pop-up').removeClass('pop-up-block')
	})
})
