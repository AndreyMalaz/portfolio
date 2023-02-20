
//Burger Setup

const navBtn = document.querySelector('.nav__toggle');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');
const body = document.body;

navBtn.onclick = function(){
	nav.classList.toggle('nav-mobile');
    menuIcon.classList.toggle('menu-icon-active');
	body.classList.toggle('lock');

}

//Setting up the animation

AOS.init({
	//disable: 'phone'
	//once: true
});
