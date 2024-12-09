const data = [
    {
        question: "What does CSS stand for?",
        options: [
            "Cascading Style Sheets",
            "Creative Style Scripts",
            "Computer Style System",
            "Custom Style Syntax",
        ],
        correct: 0,
    },
    {
        question: "Which HTML element is used for the largest heading?",
        options: ["<h6>", "<head>", "<h1>", "<header>"],
        correct: 2,
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        correct: 1,
    },
    {
        question: "How do you add a comment in HTML?",
        options: [
            "// This is a comment",
            "<!-- This is a comment -->",
            "/* This is a comment */",
            "# This is a comment",
        ],
        correct: 1,
    },
    {
        question: "Which CSS property controls the text size?",
        options: ["font-style", "text-size", "font-size", "size"],
        correct: 2,
    },
];

const questionElm = document.querySelector(".question");
const optionElements = document.querySelectorAll(".option_1, .option_2, .option_3, .option_4");
const answerInputs = document.querySelectorAll(".answer");
const submitElm = document.querySelector(".button");

let currentQuiz = 0;
let score = 0;


const loadQuiz = () => {
    const { question, options } = data[currentQuiz];
    questionElm.innerText = question;
    optionElements.forEach((optionElm, index) => {
        optionElm.innerText = options[index];
    });
    answerInputs.forEach((input) => {
        input.checked = false;
    });
};

submitElm.addEventListener("click", () => {
    const selectedOption = Array.from(answerInputs).find((input) => input.checked);
    if (selectedOption) {
        const selectedIndex = Array.from(answerInputs).indexOf(selectedOption);
        if (selectedIndex === data[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < data.length) {
            loadQuiz();
        } else {
            showScoreBoard();
        }
    } else {
        alert("Please select an answer before submitting!");
    }
});


const showScoreBoard = () => {
    document.body.innerHTML = `
        <div class="score-board">
            <h1>Quiz Completed!</h1>
            <p>You scored <span class="score">${score}</span> out of <span class="total">${data.length}</span></p>
            <div class="score-message">
                ${
                    score === data.length
                        ? "🎉 Perfect Score! You're a quiz master! 🎉"
                        : score > data.length / 2
                        ? "👏 Great job! You know your stuff."
                        : "🤔 Better luck next time! Keep practicing."
                }
            </div>
            <button class="retry-button" onclick="location.reload()">Retry Quiz</button>
        </div>
    `;
};


loadQuiz();
