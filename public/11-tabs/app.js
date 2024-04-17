const btns = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about')
const articles = document.querySelectorAll('.content')

about.addEventListener('click', function(event) {
	const id = event.target.dataset.id

	if (id) {
		btns.forEach(function(btn) {
			btn.classList.remove('active')
		})
		event.target.classList.add('active')

		articles.forEach(function(artice) {
			artice.classList.remove('active')
		})
		document.getElementById(id).classList.add('active')
	}
})
