const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion ={};
let acceptingAnswers= true;
let score = 0 ;
let questionCounter = 0;
let availableQuestions=[];

let questions=[
    {
        question:' What is 2+2 ?',
        choice1:'2',
        choice2:'4',
        choice3:'21',
        choice4:'17',
        answer:2,
    },
    {
        question:' Who is the famous Parkour Athlete ?',
        choice1:'Archie Aroyan',
        choice2:'Diomedes Diaz',
        choice3:'Cesar Martinez',
        choice4:'Monkey D Luffy',
        answer:1,
    },
    {
        question:' Which is the Luffy\'s devil fruit',
        choice1:'Gomu Gomu no Mi',
        choice2:'Hito Hito no Mi: Nika model',
        choice3:'Bara Bara no Mi',
        choice4:'Mera Mera no Mi',
        answer:2,
    },
    {
        question:' What is 2+2',
        choice1:'2',
        choice2:'4',
        choice3:'21',
        choice4:'17',
        answer:2,
    }
]

const SC0RE_POINTS = 100;
const MAX_QUESTIONS = 4;

startGame = () =>{
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion()
}

getNewQuestion = () =>{
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return window.location('/end.html');
    }
    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS)*100}%`;

    const questionsIndex = Math.floor(Math.random()*availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice'+ number];
    })


}
