const projects = [
	{
		title: 'Color Flipper',
		img: './images/color-flipper.png'
	},
	{
		title: 'Counter',
		img: './images/counter.png'
	}
]

const sectionCenter = document.querySelector('.section-center')

function displayItems(projects) {
	const displayProjects = projects.map(function (item) {

		return `<article class="preview">
				<img src="${item.img}" class="preview-image" alt="${item.title} preview">
				<div class="item-info">
					<h3>${item.title}</h3>
				</div>
			</article>`
	}).join('')

	sectionCenter.innerHTML = displayProjects
}

window.addEventListener('DOMContentLoaded', function () {
	displayItems(projects)
})
