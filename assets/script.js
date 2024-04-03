const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const ARROWLEFT = document.querySelector(".arrow_left");
const ARROWRIGHT = document.querySelector(".arrow_right");
const CAROUSELCONTAINER = document.querySelector(".banner-img");
const DOTS = document.querySelector(".dots");
let currentIndex = 0;

function updateDots() {
	DOTS.innerHTML = '';
	slides.forEach((slide, index) => {
		const dot = document.createElement("span");
		dot.classList.add('dot');
		if (index === currentIndex) {
			dot.classList.add('dot_selected');
		}
		DOTS.appendChild(dot);
	});
}

function showSlide(index) {
	const slide = slides[index];
	let currentImg = CAROUSELCONTAINER.src;
	CAROUSELCONTAINER.src = currentImg.substr(0, currentImg.length - 10) + slide.image;
	const tagLine = document.querySelector('#banner p');
	tagLine.innerHTML = slide.tagLine;
	currentIndex = index;
	updateDots();
}

ARROWLEFT.addEventListener('click', () => {
	currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	showSlide(currentIndex);
});

ARROWRIGHT.addEventListener('click', () => {
	currentIndex = (currentIndex + 1) % slides.length;
	showSlide(currentIndex);
});

showSlide(currentIndex);