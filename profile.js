let color = document.querySelector('#color');
let place = document.querySelector('#place');
let ritual = document.querySelector('#ritual');

const cChoice = (event) => {
    event.preventDefault()
		alert("My favorite color is Orange!>")
}

const fPlace = (event) => {
    event.preventDefault()
    alert("My favorite place is home!")

}

const fRitual = (event) => {
    event.preventDefault()
	alert("My favorite ritual is playing games!")
}

color.addEventListener('click', cChoice)
place.addEventListener('click', fPlace)
ritual.addEventListener('click', fRitual)