// Set up variables to work the clock
const timer = document.querySelector(".display .timer");
const workTimer = document.querySelector(".work .timer p");
const restTimer = document.querySelector(".rest .timer p");

// TODO Do initial setup on the display of times and variables
var workTime 
var restTime 
var activationTime 

// TODO Make a function that takes n parameters: the timer to be modified,
// the operand to use on the number, and the node whose innerHTML is to be
// changed

// TODO Make functions for each of the panel buttons


// TODO	Make a handler function that formats time outputs into proper strings
// for display on the webpage

// TODO Make a handler function that takes in text strings from the page and
// converts them into integers for the code to work with

function setGoalTime(time) {
	var goalTime = new Date();
	goalTime.setMinutes(goalTime.getMinutes() + time);
	return goalTime;
}

// Math.floor(Date.now() /1000/60 %60) formula for minutes
