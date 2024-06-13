document.addEventListener('DOMContentLoaded', () => {
	const cardholder = document.querySelector('.container__card-name')
	const cardnumber = document.querySelector('.container__card-number')
	const mmyy = document.querySelector('.container__card-exp')
	const cvc = document.querySelector('.container__backcard-cvc')
	const cardholdererror = document.querySelector('.cardholder-error')
	const cardnumbererror = document.querySelector('.cardnumber-error')
	const mmyyerror = document.querySelector('.mmyy-error')
	const cvcerror = document.querySelector('.cvc-error')
	const i1 = document.querySelector('.value-cardnumber')
	const i2 = document.querySelector('.value-cardholder')
	const i3 = document.querySelector('.value-mm')
	const i4 = document.querySelector('.value-yy')
	const i5 = document.querySelector('.value-cvc')

	const button = document.querySelector('.container__confirm-button')

	const validation = () => {
		const cardnumberInput = document.querySelector('.value-cardnumber').value
		const cardholderInput = document.querySelector('.value-cardholder').value
		const mmInput = document.querySelector('.value-mm').value
		const yyInput = document.querySelector('.value-yy').value
		const cvcInput = document.querySelector('.value-cvc').value

		var isValid = true

		if (cardholderInput == '') {
			cardholdererror.innerHTML = "Can't be blank"
			isValid = false
			i2.classList.add('invalid')
		} else if (!cardholderInput.includes(' ')) {
			cardholdererror.innerHTML = 'Enter your first and last name'
			isValid = false
			i2.classList.add('invalid')
		} else {
			cardholdererror.innerHTML = ''
			i2.classList.remove('invalid')
		}

		if (cardnumberInput == '') {
			cardnumbererror.innerHTML = "Can't be blank"
			isValid = false
			i1.classList.add('invalid')
		} else if (cardnumberInput.length != 16 || isNaN(cardnumberInput)) {
			cardnumbererror.innerHTML = 'Card number must be exactly 16 digits.'
			isValid = false
			i1.classList.add('invalid')
		} else if (!Number.isInteger(Number(cardnumberInput))) {
			cardnumbererror.innerHTML = "Can't have ',' or '.'"
			isValid = false
			i1.classList.add('invalid')
		} else {
			cardnumbererror.innerHTML = ''
			i1.classList.remove('invalid')
		}

		if (mmInput == '' || yyInput == '') {
			mmyyerror.innerHTML = "Can't be blank"
			isValid = false
			i3.classList.add('invalid')
			i4.classList.add('invalid')
		} else if (mmInput.length != 2 || isNaN(mmInput) || yyInput.length != 2 || isNaN(yyInput)) {
			mmyyerror.innerHTML = 'Date must be exactly 2 digits'
			isValid = false
			i3.classList.add('invalid')
			i4.classList.add('invalid')
		} else if (!Number.isInteger(Number(mmInput)) || !Number.isInteger(Number(yyInput))) {
			mmyyerror.innerHTML = "Can't have ',' or '.'"
			isValid = false
			i3.classList.add('invalid')
			i4.classList.add('invalid')
		} else {
			mmyyerror.innerHTML = ''
			i3.classList.remove('invalid')
			i4.classList.remove('invalid')
		}

		if (cvcInput == '') {
			cvcerror.innerHTML = "Can't be blank"
			isValid = false
			i5.classList.add('invalid')
		} else if (cvcInput.length != 3 || isNaN(cvcInput)) {
			cvcerror.innerHTML = 'Cvc number must be exactly 3 digits.'
			isValid = false
			i5.classList.add('invalid')
		} else if (!Number.isInteger(Number(cvcInput))) {
			cvcerror.innerHTML = "Can't have ',' or '.'"
			isValid = false
			i5.classList.add('invalid')
		} else {
			cvcerror.innerHTML = ''
			i5.classList.remove('invalid')
		}

		if (isValid) {
			const success = document.querySelector('.container__success')
			const form = document.querySelector('.container__form')
			const fixedcardnumber = cardnumberInput.match(/.{1,4}/g)

			cardholder.innerHTML = cardholderInput
			cvc.innerHTML = cvcInput
			mmyy.innerHTML = mmInput + '/' + yyInput
			cardnumber.innerHTML = fixedcardnumber.join(' ')
			button.innerHTML = 'Continue'
			success.style.display = 'flex'
			form.style.display = 'none'

			const restartfunction = () => {
				location.reload()
			}

			button.addEventListener('click', restartfunction)
		}
	}

	button.addEventListener('click', validation)
})
