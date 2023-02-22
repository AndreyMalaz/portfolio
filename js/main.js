
/Burger Setup

const navBtn = document.querySelector('.nav__toggle');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');
const body = document.body;


if (navBtn) {
	menuIcon.addEventListener('click', e => {
		nav.classList.toggle('nav-mobile')
		menuIcon.classList.toggle('menu-icon-active')
		body.classList.toggle('lock')
	})
	nav.querySelectorAll('.nav-link').forEach(link => {
		link.addEventListener('click', () => {
			nav.classList.remove('nav-mobile')
			menuIcon.classList.remove('menu-icon-active')
			body.classList.remove('lock')
		})
	})
}


//Setting up the animation

AOS.init({
	//disable: 'phone'
	//once: true
});

