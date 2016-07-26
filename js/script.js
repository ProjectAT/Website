var navcontent = '<a href="#">About</a><a href="#">Team</a><a href="https://github.com/ProjectAT/uam" target="">Github</a>'

function loadContent(destination, content) {
	console.log(destination);
	var target = document.getElementById(destination);
	target.innerHTML = '<object type="text/html" data="'+ content +'" ></object>';
	changeNavToClose();
}

function changeNavToClose() {
	var nav = document.getElementById('nav');
	console.log(nav.innerHTML);
	nav.innerHTML = '<a onclick="closeSampleOutput()">close</a>';
}

function openSampleOutput() {
	var el = document.getElementById('overlay');
	if (el.classList) {
	    el.classList.add('open');
	} else {
	    el.className += ' open';
	}
	loadContent('sample-output', './assets/report.html');
}

function closeSampleOutput() {
	var el = document.getElementById('overlay');
	if (el.classList) {
	    el.classList.remove('open');
	} else {
	    el.className -= ' open';
	}
	var nav = document.getElementById('nav');
	nav.innerHTML = navcontent;
}

function toggleBodyScroll() {
	var el = document.getElementsByTagName("body")[0];
	if (el.classList.length == 0) {
		if (el.classList) {
			el.classList.add('_no-scroll');
		}
		else {
			el.classList += '_no-scroll'
		}
	}
	else {
		if (el.classList) {
			el.classList.remove('_no-scroll');
		}
		else {
			el.classList -= '_no-scroll'
		}
	}
}

// sample text output open/close
function openModal(target) {
	toggleBodyScroll();
	var el = document.getElementById(target);
	if (el.classList) {
		el.classList.add('open');
	}
	else {
		el.classList += 'open'
	}
}

function closeModal(target) {
	toggleBodyScroll();
	var el = document.getElementById(target);
	if (el.classList) {
		el.classList.remove('open');
	}
	else {
		el.classList -= 'open';
	}
}
