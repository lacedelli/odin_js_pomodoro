// Set up variables to work the clock
const TIMER = document.querySelector(".display .timer");
const WORKTIMER = document.querySelector(".work .timer p");
const RESTTIMER = document.querySelector(".rest .timer p");
const DISPLAY = document.querySelector(".display .timer");

// TODO Do initial setup on the display of times and variables
let workTimeInterval = 25;
let restTimeInterval = 5;
let timerIsRunning = false;
let timerStarted = false;
let interval;

// Function that takes a string operand and a node, depending on the operation specified
// it will modify the innerHTML of the node.

function timerController(operand, node) {
	if(!timerIsRunning){
		if(operand === "add") {
			let timer = parseToInt(node);

			if (timer.minutes === 59) {
				timer.minutes = 0;
			} else {
				timer.minutes++;
			}
		
			node.innerHTML = parseToStr(timer.minutes, timer.seconds);

		
		} else if(operand === "sub") {
			let timer = parseToInt(node);

			if (timer.minutes === 0) {
				timer.minutes = 59;
			} else {
				timer.minutes--;
			}

			node.innerHTML = parseToStr(timer.minutes, timer.seconds);
		}	
		updateCounters();
	}
}

// Function that updates both controller variables with the 
// values of their innerHTML counterparts.

function updateCounters(){
	workTimeInterval = parseToInt(WORKTIMER).minutes;
	restTimeInterval = parseToInt(RESTTIMER).minutes;
}

// TODO Make functions for play button
function play() {
	timerIsRunning = true;
	let deadline;
	if(!timerStarted){
		timerStarted = true;
		deadline = setFinishTime(workTimeInterval);
		console.log(deadline);
	} else {
		deadline = setFinishTime(parseToInt(DISPLAY).minutes, parseToInt(DISPLAY).seconds); 
		console.log(deadline); 
	}
	let timeLeft = Date.parse(deadline) - Date.parse(new Date);
	console.log(timeLeft/1000/60 %60);
}

// TODO Make a function for the pause button
function pause() {
	timerIsRunning = false;
}

// TODO Make a function for the stop button
function stop() {
	timerIsRunning = false;
	timerStarted = false;
}

// TODO Make a function for the reset button
function reset() {
	if(!timerIsRunning){

	}
}

// TODO add a function that sets a "deadline" based on the moment the function is called and two 
// integers, that represent minutes and seconds.
function setFinishTime(minutes, seconds = 0){
	let deadline = new Date();
	deadline.setMinutes(deadline.getMinutes() + minutes);
	deadline.setSeconds(deadline.getSeconds() + seconds);
	return deadline;
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
