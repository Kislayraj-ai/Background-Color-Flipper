const colors = [ 'red', 'yellow', 'green', 'orange', 'violet', 'pink', 'blue' ];
const btn = document.getElementById('btn');
const span = document.querySelector('.color');

btn.addEventListener('click', () => {
	const randomColor = colors[randomNumber()];
	span.textContent = randomColor;
	document.body.style.backgroundColor = randomColor;
});

function randomNumber() {
	return Math.floor(Math.random() * colors.length);
}
