const btn = document.querySelector('.navbar__btn');

const list = document.querySelector('.navbar__list');

function toggle() {
	list.classList.toggle('active');
}

btn.addEventListener('click', toggle);
