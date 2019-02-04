var screen = document.getElementById('screen'),
home = document.getElementById('home');
home.addEventListener('click', () => {
	if (screen.classList.contains('active')) {
		screen.classList.remove('active');
	}else{
		screen.classList.add('active');
	}
});