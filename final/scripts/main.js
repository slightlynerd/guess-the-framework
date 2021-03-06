var quiz = [
	{
		answer: 'Angularjs',
		description: 'AngularJS is a JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications.',
		imgSrc: 'images/angular.png',
		time: 15000
	},
	{
		answer: 'Vuejs',
		description: 'Vue.js is an open-source progressive JavaScript framework for building user interfaces. Integration into projects that use other JavaScript libraries is made easy with Vue because it is designed to be incrementally adoptable.',
		imgSrc: 'images/vue.png',
		time: 15000
	},
	{
		answer: 'Emberjs',
		description: 'Ember.js is an open-source JavaScript web framework, based on the Model–view–viewmodel pattern. It allows developers to create scalable single-page web applications by incorporating common idioms and best practices into the framework.',
		imgSrc: 'images/Emberjs.png',
		time: 15000
	},
	{
		answer: 'React',
		description: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook, Instagram and a community of individual developers and corporations. ',
		imgSrc: 'images/react.png',
		time: 15000
	},
	{
		answer: 'NativeScript',
		description: 'NativeScript is an open-source framework to develop apps on the Apple iOS and Android platforms. It was originally conceived and developed by Progress.',
		imgSrc: 'images/NativeScript_logo.png',
		time: 15000
	},
];

var timer = document.getElementById('timer');
var userScoreNode = document.getElementById('userScore');
var logo = document.getElementById('logo');

var timeLeft;
var count = 0;
var userScore = 0;

//var lol = quiz[count].time;
//var timeforQuestion = quiz[count].time;
var timeout;
var timeInterval;

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
  init();
}

function init() {
	if (count > 4) {
		clearInterval(timeInterval);
		showSummary();
		count = 0;
		userScore = 0;
		return;
	}
	else {
		logo.src = quiz[count].imgSrc;
		document.getElementById('answer').value = '';
		clearInterval(timeInterval);
		setTimer();
	}
}

//Set timer function for the progress bar
function setTimer() {
	var timeleft = 15;
	timeInterval = setInterval(function () {
		document.getElementById("progressBar").value = 15 - --timeleft;
		if (timeleft == 0) {
			//clearInterval(downloadTimer);
			checkAnswer();
		}
	}, 1000);
}

/* Set timer function for the old "text countdown timer"
function setTimer() {
	var timeFrame = timeforQuestion;
	timeInterval = setInterval(function() {
		timeFrame = timeFrame - 1000;
		timeLeft = timeFrame / 1000;
		timer.innerText = timeLeft;
		if (timeLeft == 0) {
			timer.innerText = timeforQuestion / 1000;
			checkAnswer();
		}
	}, 1000);
} */

function checkAnswer() {
	let userAnswer = document.getElementById('answer').value;
	if (userAnswer.toLowerCase() == quiz[count].answer.toLowerCase()) {
		alert('Right answer \n\n' + quiz[count].description);
		userScore++;
		userScoreNode.innerText = userScore;
		nextQuestion();
	}
	else {
		alert('Wrong answer\n\n' + quiz[count].description);
		nextQuestion();
	}
}

function nextQuestion() {
	//userScoreNode.innerText = userScore;
	count++;
	init();
}

function removeSummary() {
	document.getElementById('game-summary').style.display = 'none';
	userScoreNode.innerText = 0;
	init();
}

function showSummary() {
	document.getElementById('game-summary').style.display = "block";
	totalScore.innerText = userScore;
}

on();