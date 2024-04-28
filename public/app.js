const projects = [
	{
		title: 'Color Flipper',
		img: './images/color-flipper.png'
	},
	{
		title: 'Counter',
		img: './images/counter.png'
	},
	{
		title: 'Reviews',
		img: './images/reviews.png'
	},
	{
		title: 'Navbar',
		img: './images/navbar.png'
	},
	{
		title: 'Sidebar',
		img: './images/sidebar.png'
	},
	{
		title: 'Modal',
		img: './images/modal.png'
	},
	{
		title: 'Questions',
		img: './images/questions.png'
	},
	{
		title: 'Menu',
		img: './images/menu.png'
	},
	{
		title: 'Video',
		img: './images/video.png'
	},
	{
		title: 'Scroll',
		img: './images/scroll.png'
	},
	{
		title: 'Tabs',
		img: './images/tabs.png'
	},
	{
		title: 'Countdown',
		img: './images/countdown.png'
	},
	{
		title: 'Lorem Ipsum',
		img: './images/lorem-ipsum.png'
	},
	{
		title: 'Grocery Bud',
		img: './images/grocery-bud.png'
	},
	{
		title: 'Slider',
		img: './images/slider.png'
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
