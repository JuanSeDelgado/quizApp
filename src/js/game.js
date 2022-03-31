const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "¿Qué quieren decir las siglas WWW en un navegador?",
    choice1: "World Wide War",
    choice2: "World Wide Web",
    choice3: "World Wide Western",
    choice4: "Word Wide Winner",
    answer: 2,
  },
  {
    question:
      "¿A qué país pertenecen las ciudades de Perth, Adelaida y Brisbane?",
    choice1: "Colombia",
    choice2: "República Democrática del Congo",
    choice3: "Australia",
    choice4: "China",
    answer: 3,
  },
  {
    question:
      "¿Cuál figura geométrica es generalmente usada para las señales de PARE?",
    choice1: "Octágono",
    choice2: "Pentágono",
    choice3: "Triángulo",
    choice4: "Hexágono",
    answer: 1,
  },
  {
    question: "¿Quién era el ingeniero principal de Apple en sus inicios?",
    choice1: "Steve Jobs",
    choice2: "Freddy Vega",
    choice3: "Cesar Martínez",
    choice4: "Steve Wozniak",
    answer: 4,
  },
  {
    question: "¿Cuál es la compañía tecnológica más grande de Corea del Sur?",
    choice1: "Apple",
    choice2: "Samsung",
    choice3: "Amazon",
    choice4: "Android",
    answer: 2,
  },
  {
    question: "¿Qué animal aparece en el logo de Porsche?",
    choice1: "Una cebra",
    choice2: "Un zorro",
    choice3: "Un caballo",
    choice4: "Un jaguar",
    answer: 3,
  },
  {
    question: "¿Quién fue la primera mujer en ganar un premio Nobel (en 1903)?",
    choice1: "Katherine G. Johnson",
    choice2: "Dorothy Vaughan",
    choice3: "Marie Curie",
    choice4: "Mary Jackson",
    answer: 3,
  },
  {
    question:
      "¿Quién fue la primera mujer piloto en volar sola a través del Atlántico?",
    choice1: "Amelia Earhart",
    choice2: "Valentina Tereshkova",
    choice3: "Rosalind Franklin",
    choice4: "Kitty Joyner",
    answer: 1,
  },
  {
    question: "¿Cuál es el símbolo del potasio?",
    choice1: "K",
    choice2: "P",
    choice3: "J",
    choice4: "Au",
    answer: 1,
  },
  {
    question: "¿Qué se moja más entre más se seca?",
    choice1: "Una botella",
    choice2: "Un zapato",
    choice3: "Una toalla",
    choice4: "Un ratón impermeable",
    answer: 1,
  },
];

const SC0RE_POINTS = 100;
const MAX_QUESTIONS = 10;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("../end.html");
  }
  questionCounter++;
  progressText.innerText = `Pregunta ${questionCounter} de ${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionsIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionsIndex, 1);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    let classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(SC0RE_POINTS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

startGame();
