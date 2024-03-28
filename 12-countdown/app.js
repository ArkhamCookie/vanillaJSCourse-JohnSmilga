const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]
const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

const giveaway = document.querySelector('.giveaway')
const deadline = document.querySelector('.deadline')
const deadlineHeaders = document.querySelectorAll('.deadline-format h4')

// If hard coding giveaway date
// const giveawayDate = new Date('July 3, 2024 13:30')

// Always have giveaway date at least 10 days in the future
const date = new Date()
const giveawayDate = new Date(
	date.getFullYear(),
	date.getMonth(),
	date.getDate() + 10,
	11, 30, 0
)

const giveawayYear = giveawayDate.getFullYear()
const giveawayDay = giveawayDate.getDate()
const giveawayMinutes = giveawayDate.getMinutes()

const giveawayMonth = months[giveawayDate.getMonth()]
const giveawayWeekday = weekdays[giveawayDate.getDay()]

let giveawayHours = giveawayDate.getHours()
let giveawayAmPm
if (giveawayHours >= 13) {
	giveawayAmPm = 'pm'
	giveawayHours = giveawayHours - 12
} else {
	giveawayAmPm = 'am'
}

giveaway.textContent = `giveaway ends on ${giveawayWeekday}, ${giveawayMonth} ${giveawayDay} ${giveawayYear} ${giveawayHours}:${giveawayMinutes}${giveawayAmPm}`

function getRemainingTime() {
	const futureTime = giveawayDate.getTime()
	const currentTime = new Date().getTime()
	const timeRemaining = futureTime - currentTime

	// Vaules in millseconds
	const oneDay = 24*60*60*1000
	const oneHour = 60*60*1000
	const oneMinute = 60*1000

	const daysRemaining = Math.floor(timeRemaining / oneDay)
	const hoursRemaining = Math.floor((timeRemaining % oneDay) / oneHour)
	const minutesRemaining = Math.floor((timeRemaining % oneHour) / oneMinute)
	const secondsRemaining = Math.floor((timeRemaining % oneMinute) / 1000)

	const values = [daysRemaining, hoursRemaining, minutesRemaining, secondsRemaining]

	function format(item) {
		if (item < 10) {
			return '0' + item
		}
		return item
	}

	deadlineHeaders.forEach(function(item, index) {
		item.innerHTML = format(values[index])
	})

	if (timeRemaining <= 0) {
		clearInterval(countdown)
		deadline.innerHTML = '<h4 class="expired">Sorry, this giveaway is over.</h4>'
	}
}

const countdown = setInterval(getRemainingTime, 1000)

getRemainingTime()
