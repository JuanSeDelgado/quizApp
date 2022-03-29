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
        question:' Which is the Luffy\'s devil fruit ?',
        choice1:'Gomu Gomu no Mi',
        choice2:'Hito Hito no Mi: Nika model',
        choice3:'Bara Bara no Mi',
        choice4:'Mera Mera no Mi',
        answer:2,
    },
    {
        question:' Who is USA president ?',
        choice1:'Lord Petrosky',
        choice2:'Marshall D. Teach',
        choice3:'Joe Biden',
        choice4:'Tony Stark',
        answer:3,
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

        return window.location.assign('../end.html');
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

    availableQuestions.splice(questionsIndex, 1);
    acceptingAnswers = true;

}

choices.forEach(choice => {
    choice.addEventListener('click', e =>{
        if(!acceptingAnswers) return

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect';

        if(classToApply === 'correct'){
            incrementScore(SC0RE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(()=>{
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion()
        }, 1000);
    })
})

incrementScore = num =>{
    score += num;
    scoreText.innerText = score;

}

startGame();