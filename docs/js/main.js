
document.addEventListener('DOMContentLoaded', function() {

	const offerInnerBlock = document.querySelector('.offer__inner');
	const offerIndicatorPlane = document.querySelector('.offer__indicator-plane');
	const resultContent = document.querySelector('.result__content');
	const resultIndicatorPlane = document.querySelectorAll('.slider-item__indicator-plane');

	window.addEventListener('scroll', function() {
		let offerTopPosition = offerInnerBlock.getBoundingClientRect();
		let resultTopPosition = resultContent.getBoundingClientRect();

		if (offerTopPosition.top <= -10) {
			offerIndicatorPlane.classList.add('bottom');
		} else {
			offerIndicatorPlane.classList.remove('bottom');
		}

		// for plane bottom
		if (resultTopPosition.top <= 150) {
			resultIndicatorPlane.forEach(function(item) {
				item.style.left = `${75}%`;
			});
		} else {
			resultIndicatorPlane.forEach(function(item) {
				item.style.left = `${19}%`;
			});
		}
	});
});

// ......................Pop-up........................

const popup = document.querySelector('.pop-up');
const closeButton = document.querySelector('.pop-up__close');
const buttonForm = document.querySelectorAll('.marketing__button');
const bodyElement = document.querySelector('body');

	buttonForm.forEach(function(item) {
		item.addEventListener('click', function() {
			bodyElement.style.overflow = 'hidden';
			bodyElement.classList.add('overflow');
			popup.classList.add('open');
		});
	});

	closeButton.addEventListener('click', function() {
		bodyElement.style.overflow = '';
		bodyElement.classList.remove('overflow');
		popup.classList.remove('open');
	});

// ......................Paralax.......................

window.onload = function() {

	const blockParalax = document.querySelector('body');

	if(blockParalax) {
		const paralaxItem = document.querySelectorAll('.paralax-item');
		const forLeafX = 20;
		const forLeafY = 70;
		const speed = 0.1;
		let positionX = 0;
		let positionY = 0;
		let coordXprocent = 0;
		let coordYprocent = 0;

		function setMouseParalaxStyle() {
			const distX = coordXprocent - positionX;
			const distY = coordYprocent - positionY;

			positionX = positionX + (distX * speed);
			positionY = positionY + (distY * speed);
			paralaxItem.forEach(function(item) {
				item.style.cssText = `transform: translate(${positionX / forLeafX}%, ${positionY / forLeafY}%);`;
			});

			requestAnimationFrame(setMouseParalaxStyle);
		}
		setMouseParalaxStyle();

		blockParalax.addEventListener('mousemove', function(e) {
			const paralaxWidth = blockParalax.offsetWidth;
			const paralaxHeight = blockParalax.offsetHeight;
			const coordX = e.pageX - paralaxWidth / 2;
			const coordY = e.pageY - paralaxHeight / 2;

			coordXprocent = coordX / paralaxWidth * 100;
			coordYprocent = coordY / paralaxHeight * 100;
		});
	}
}

$(function(){

// .......................WOW.js.......................

    new WOW().init();

// ......................CounterUp.....................

	$(".counter").counterUp({
		delay: 10,
		time: 400
	});

// ...................result-slider....................

	$('.result__slider').slick({
		arrows: true,
		dots: false,
		autoplay: true
	});

// ......................Scroll........................

    $('a[href^="#"]').click(function(){
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        },800);
    });

});