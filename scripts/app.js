// Set up variables to work the clock
const TIMER = document.querySelector(".display .timer");
const WORKTIMER = document.querySelector(".work .timer p");
const RESTTIMER = document.querySelector(".rest .timer p");

// TODO Do initial setup on the display of times and variables
let displayWorkTime = 25; 
let displayRestTime = 5;
let timeInterval = 25;

// TODO Make a function that takes n parameters: the timer to be modified,
// the operand to use on the number, and the node whose innerHTML is to be
// changed
function timerController(time, operand, node) {
	if(operand === "add") {
		
	} else if(operand === "sub") {

	}
}

// TODO Make functions for play button
function play() {
	console.log("henlo, play");
}

// TODO Make a function for the pause button
function pause() {
	console.log("helno, pause");
}

// TODO Make a function for the stop button
function stop() {
	console.log("henlo, stop");
}

// TODO Make a function for the reset button
function reset() {
	console.log("henlo, reset");
}

// Function that takes two numbers and formats them to be displayed in "minutes:seconds" format,
// padding with zeros if necessary
function parseToStr(minutes, seconds) {
	let strMinutes = ""
	let strSeconds = ""

	if (minutes < 10) {
		strMinutes = "0" + String(minutes);
	} else {
		strMinutes = String(minutes);
	}

	if (seconds < 10) {
		strSeconds = "0" + String(seconds);
	} else {
		strSeconds = String(seconds);
	}

	return strMinutes + ":" + strSeconds;
}

// Function that takes a node from the page and returns an array with minutes and seconds
function parseToInt(node) {
	let pat = /(\d{1,2}):(\d{1,2})/;
	let match = node.innerHTML.match(pat);
	return {
		"minutes": parseInt(match[1]),
		"seconds": parseInt(match[2]),
	};
}

// Math.floor(Date.now() /1000/60 %60) formula for minutes
