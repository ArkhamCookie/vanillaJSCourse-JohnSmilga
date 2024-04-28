const projects = [
	{
		title: 'Color Flipper',
		path: './01-color-flipper',
		img: './images/color-flipper.png'
	},
	{
		title: 'Counter',
		path: './02-counter',
		img: './images/counter.png'
	},
	{
		title: 'Reviews',
		path: './03-reviews',
		img: './images/reviews.png'
	},
	{
		title: 'Navbar',
		path: './04-navbar',
		img: './images/navbar.png'
	},
	{
		title: 'Sidebar',
		path: './05-sidebar',
		img: './images/sidebar.png'
	},
	{
		title: 'Modal',
		path: './06-modal',
		img: './images/modal.png'
	},
	{
		title: 'Questions',
		path: './07-questions',
		img: './images/questions.png'
	},
	{
		title: 'Menu',
		path: './08-menu',
		img: './images/menu.png'
	},
	{
		title: 'Video',
		path: './09-video',
		img: './images/video.png'
	},
	{
		title: 'Scroll',
		path: './10-scroll',
		img: './images/scroll.png'
	},
	{
		title: 'Tabs',
		path: './11-tabs',
		img: './images/tabs.png'
	},
	{
		title: 'Countdown',
		path: './12-countdown',
		img: './images/countdown.png'
	},
	{
		title: 'Lorem Ipsum',
		path: './13-lorem-ipsum',
		img: './images/lorem-ipsum.png'
	},
	{
		title: 'Grocery Bud',
		path: './14-grocery-bud',
		img: './images/grocery-bud.png'
	},
	{
		title: 'Slider',
		path: './15-slider',
		img: './images/slider.png'
	}
]

const sectionCenter = document.querySelector('.section-center')

function displayItems(projects) {
	const displayProjects = projects.map(function (item) {

			return `<a href="${item.path}" target="_blank">
					<article class="preview">
						<img src="${item.img}" class="preview-image" alt="${item.title} preview">
						<div class="item-info">
							<h3>${item.title}</h3>
						</div>
					</article>
				</a>`
	}).join('')

	sectionCenter.innerHTML = displayProjects
}

window.addEventListener('DOMContentLoaded', function () {
	displayItems(projects)
})
