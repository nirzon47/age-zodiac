const birthdate = document.getElementById('birthdate')
const calculateButton = document.getElementById('calculate-button')

const years = document.getElementById('years')
const months = document.getElementById('months')
const days = document.getElementById('days')

const sign = document.getElementById('zodiac-sign')

calculateButton.addEventListener('click', () => {
	calculateAge
})

const calculateAge = () => {
	if (!birthdate.value) {
		alert('Please enter your birthdate')
		return
	}

	if (birthdate.value > new Date().toISOString().split('T')[0]) {
		alert('Please enter a valid birthdate')
		return
	}

	const currentDate = new Date()
	const ageDiff = currentDate - new Date(birthdate.value)
	const ageDate = new Date(ageDiff)

	years.innerText = ageDate.getUTCFullYear() - 1970
	months.innerText = ageDate.getUTCMonth()
	days.innerText = ageDate.getUTCDate() - 1

	setZodiacSign()
}

const setZodiacSign = () => {
	const birthDate = new Date(birthdate.value)
	const month = birthDate.getUTCMonth() + 1
	const day = birthDate.getUTCDate()

	let zodiacSign

	if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
		zodiacSign = 'Capricorn'
	} else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
		zodiacSign = 'Aquarius'
	} else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
		zodiacSign = 'Pisces'
	} else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
		zodiacSign = 'Aries'
	} else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
		zodiacSign = 'Taurus'
	} else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
		zodiacSign = 'Gemini'
	} else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
		zodiacSign = 'Cancer'
	} else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
		zodiacSign = 'Leo'
	} else if ((month == 8 && day >= 23) || (month == 9 && day <= 23)) {
		zodiacSign = 'Virgo'
	} else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
		zodiacSign = 'Libra'
	} else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
		zodiacSign = 'Scorpio'
	} else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
		zodiacSign = 'Sagittarius'
	}

	sign.innerText = zodiacSign
}
