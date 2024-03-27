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

const giveawayDate = new Date('July 3, 2024 13:30')

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
