var quiz = [
    {
        answer: 'Angularjs',
        description: 'Angularjs is a JavaScript-based open-source front-end web application framework mainly maintained by Google and by a community of individuals and corporations to address many of the challenges encountered in developing single-page applications.',
        imgSrc: 'images/angular.png'
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
        imgSrc: 'images/emberjs.png',
        time: 15000
    },
    {
        answer: 'React',
        description: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook, Instagram and a community of individual developers and corporations.',
        imgSrc: 'images/react.png',
        time: 15000
    },
    {
        answer: 'NativeScript',
        description: 'NativeScript is an open-source framework to develop apps on the Apple iOS and Android platforms. It was originally conceived and developed by Progress.',
        imgSrc: 'images/NativeScript_logo.png',
        time: 15000
    }
];

var timer = document.getElementById('timer');
var userScoreNode = document.getElementById('userScore');
var logo = document.getElementById('logo');

var count = 0;
var userScore = 0;

var timeInterval;
//var timeLeft;

function init() {
    if (count > 4) {
        clearInterval(timeInterval);
        return;
    }
    else {
        logo.src = quiz[count].imgSrc;
        document.getElementById('answer').value = '';
        clearInterval(timeInterval);
        setTimer();
    }
}

function setTimer() {
    /*
    var timeFrame = quiz[count].time;
    timeInterval = setInterval(function() {
        timeFrame--;
        console.log(timeFrame);
        timeLeft = timeFrame / 1000;
        timer.innerText = timeLeft;
    }, 1000);*/
    var timeleft = 15;
    timeInterval = setInterval(function () {
        document.getElementById("progressBar").value = 15 - --timeleft;
        if (timeleft == 0) {
            //clearInterval(downloadTimer);
            checkAnswer();
        }
    }, 1000);
}

function checkAnswer() {
    var userAnswer = document.getElementById('answer').value;
    if (userAnswer.toLowerCase() === quiz[count].answer.toLowerCase()) {
        alert('Right answer! ' + quiz[count].description);
        userScore++;
        userScoreNode.innerText = userScore;
        nextQuestion();
    }
    else {
        alert('Wrong answer! ' + quiz[count].description);
        nextQuestion();
    }
}

function nextQuestion() {
    count++;
    init();
}

function on() {
    document.getElementById('game-intro').style.display = 'block';
}

function off() {
    document.getElementById('game-intro').style.display = 'none';
    init();
}

on();