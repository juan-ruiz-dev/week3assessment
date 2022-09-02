console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form Submitted!");
}

function compliment(evt){
	evt.preventDefault()
		alert("You're so wonderful!")
	
}

let form = document.querySelector('#contact');
let img = document.querySelector('#img')
form.addEventListener('submit', handleSubmit);
img.addEventListener('mouseover', compliment)

