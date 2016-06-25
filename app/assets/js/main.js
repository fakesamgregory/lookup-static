import ToggleClass from './components/toggle';
import FourSquare from './foursquare';
import Bootstrap from 'bootstrap-sass';

var searchForm = document.querySelector('#searchForm');
if (searchForm) {
	let fourSquare = new FourSquare();
}

var text = document.querySelectorAll('.js-logo-text');

[].forEach.call(text, (text) => {
	setTimeout(() => {
		text.classList.add('active');
	}, 500);
})