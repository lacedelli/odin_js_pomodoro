// Set up variables to work the clock
const timer = document.querySelector(".display .timer");
const workTimer = document.querySelector(".work .timer p");
const restTimer = document.querySelector(".rest .timer p");

// TODO Do initial setup on the display of times and variables
var displayTime = 25 
var timeInterval = 0 

// TODO Make a function that takes n parameters: the timer to be modified,
// the operand to use on the number, and the node whose innerHTML is to be
// changed
function timerController(number, operand, node) {
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

// TODO	Make a handler function that formats time outputs into proper strings
// for display on the webpage
function parseToStr() {

}

// TODO Make a handler function that takes in text strings from the page and
// converts them into integers for the code to work with
function parseToInt() {

}

// Math.floor(Date.now() /1000/60 %60) formula for minutes
