// Set up variables to work the clock
const WORKTIMER = document.querySelector(".work .timer p");
const RESTTIMER = document.querySelector(".rest .timer p");
const DISPLAY = document.querySelector(".display .timer");

// Do initial setup on the display of times and variables
let workTimeInterval = 25;
let restTimeInterval = 5;
let timerIsRunning = false;
let timerStarted = false;
let timerPaused = true;
// if 0, it's worktime, if 1 it's resttime
let intervalSwitch = 0;
let timeLeft;

// Set the interval loop working from the getgo, but have the ticker only work when timerPaused is false.
let interval = setInterval(() => {
	if (!timerPaused) {
		console.log(parseToStr(convertMil(timeLeft).minutes, convertMil(timeLeft).seconds) + " inside interval");
		timeLeft -= 1000;
		console.log("decremented time to: " + timeLeft);
		let timeArr = convertMil(timeLeft);
		DISPLAY.innerHTML = parseToStr(timeArr.minutes, timeArr.seconds);	
	}
	if (timeLeft === 0) {
		// Use a modulo operator controlled switch to change between the work and rest state.
		intervalSwitch++;
		setTimer();
	}
},1000);

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

// Function that starts the timer at the work position (its default one) 
function play() {
	timerIsRunning = true;
	if (!timerStarted) {
		setTimer();
		timerStarted = true;
		timerPaused = false;
	} else {
		timerPaused = false;	
	}
}

// Sets values to false
function pause() {
	timerIsRunning = false;
	timerPaused = true;
	
}

// Function that stops the timer and sets the timer to the relevant value depending on the 
// switch
function stop() {
	timerIsRunning = false;
	timerStarted = false;
	if (intervalSwitch % 2 === 0) {
		DISPLAY.innerHTML = parseToStr(workTimeInterval, 0);
	} else {
		DISPLAY.innerHTML = parseToStr(restTimeInterval, 0);
	}
	interval = null;
}

// Function that resets the entire inner working of the app
function reset() {
	if(!timerIsRunning){
		timerStarted = false;
		workTimeInterval = 25;
		restTimeInterval = 5;
		WORKTIMER.innerHTML = "25:00";	
		RESTTIMER.innerHTML	= "05:00";
		DISPLAY.innerHTML = "25:00";
		timerIsRunning = false;
		timerStarted = false;
		timerPaused = true;
		intervalSwitch = 0;
	}
}

// Function that returns time (in milliseconds) from the time given by the controller
function setFinishTime(minutes, seconds = 0){
	let deadline = new Date();
	deadline.setMinutes(deadline.getMinutes() + minutes);
	deadline.setSeconds(deadline.getSeconds() + seconds);
	return (Date.parse(deadline) - Date.parse(new Date()));
}

// Function that parses Date.parse() output into an object with minutes and seconds keys
function convertMil(milliseconds){
	let formatted = {
		"minutes": parseInt(milliseconds /1000 /60 %60),
		"seconds": parseInt(milliseconds /1000 %60),
	};
	return formatted;
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

function setTimer() {
	if (intervalSwitch % 2 === 0){
		timeLeft = setFinishTime(workTimeInterval);
	} else {
		timeLeft = setFinishTime(restTimeInterval);
	}
}
