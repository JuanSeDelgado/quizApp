const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion ={};
let acceptingAnswers= true;
let score = 0 ;
let questionCounter = 0;
let availableQuestion=[];

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
