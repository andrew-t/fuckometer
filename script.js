const errors = [
	'Fuck not found.',
	'Fuck not ready.',
	'You have run out of fucks. Please purchase more fucks in the Google Play Store.',
	'This issue may not be compatible with your fucks.',
	'Unable to give fucks.',
	'An error was encountered while attempting to give a fuck.'
];

let margin = 2;

document.addEventListener('DOMContentLoaded', e => {
	document.getElementById('nudger')
		.addEventListener('click', e => {
			e.preventDefault();
			document.getElementById('nudgee')
				.style.marginTop =
					`-${Math.random() * 8}vmin`;
			if (margin-- <= 0 &&
					Math.random() > 0.75)
				showError();
		});
	document.getElementById('ok')
		.addEventListener('click', e => {
			e.preventDefault();
			document.getElementById('error-box')
				.classList.add('hidden');
		});
});

function showError() {
	margin = 2;
	const error = errors[
		~~(Math.random() * errors.length)];
	document.getElementById('error-message')
		.innerHTML = error;
	document.getElementById('error-box')
		.classList.remove('hidden');
}
