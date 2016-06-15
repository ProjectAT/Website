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