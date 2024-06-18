const input = document.querySelector('input');
const button = document.querySelector('button');
const output = document.querySelector('div');
let fizzBuzz = '';

input.addEventListener('change', playFizzBuzz)
button.addEventListener('click', playFizzBuzz);

function playFizzBuzz() {

	for (let i=1; i<=input.value; i++) {

		if (i % 3 === 0 && i % 5 === 0) {
			fizzBuzz += `FizzBuzz<br />`;
		} else if (i % 3 === 0) {
			fizzBuzz += `Fizz<br />`;
		} else if (i % 5 === 0) {
			fizzBuzz += `Buzz<br />`;
		} else {
			fizzBuzz += `${i}<br />`;
		}

	}

	output.innerHTML = fizzBuzz;

}
