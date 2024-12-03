const quizContainer = document.getElementById("quiz-container");
const question = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const submit = document.getElementById("submit");
const feedback = document.getElementById("feedback");
const scoreElement = document.getElementById("score");


let currentQuestionIndex = 0;
let score = 0;

const quizQuestions = [
    {
        question: "what is capital of Japan?",
        options: ["Beijing", "Washington", "Tokyo", "Seoul"],
        correctAnswer: "Tokyo"
    },
    {
        question: "what is capital of America?",
        options: ["Seoul", "Washington", "Tokyo", "Beijing"],
        correctAnswer: "Washington"
    },
    {
        question: "what is capital of China?",
        options: [, "Washington", "Tokyo", "Seoul", "Beijing"],
        correctAnswer: "Beijing"
    },
    {
        question: "what is capital of South Korea?",
        options: ["Washington", "Tokyo", "Beijing", "Seoul"],
        correctAnswer: "Seoul"
    }
];

function loadQuestions() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    question.innerHTML = currentQuestion.question;

    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const optButton = document.createElement("button");

        optButton.classList.add("optionButton");
        optButton.textContent = option;

        optButton.onclick = function () {
            selectAnswer(option, currentQuestion.correctAnswer);
        };

        optionsContainer.appendChild(optButton);
    });
}

function selectAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        feedback.textContent = "Correct!";
        scoreElement.innerHTML = "Score:" + (++score);
    } else {
        feedback.textContent = "Incorrect! Correct Answer: " + correctAnswer;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestions();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    quizContainer.innerHTML = "<h2>Quiz Completed</h2>";
    scoreElement.textContent = "Final Score: " + score + " out of " + quizQuestions.length;
}

loadQuestions();







