const quizData = {
    banking: [{
            question: "What is the full form of 'kyc'?",
            options: ["Know Your Candidate", "Know Your Customer", "Know Your Cash", "NOT"],
            answer: "Know Your Customer"
        },
        {
            question: "What does 'FD' stand for in banking?",
            options: ["Fixed Document", "Fixed Deposit", "Flexible Deposit", "Financial Distribution"],
            answer: "Fixed Deposit"
        }
    ],
    railway: [{
            question: "Which is the longest railway route in India?",
            options: ["Dibrugarh to Kanyakumari", "Jammu to Kanyakumari", "Kolkata to Mumbai", "Delhi to Chennai"],
            answer: "Dibrugarh to Kanyakumari"
        },
        {
            question: "Where is the headquarters of Indian Railways located?",
            options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
            answer: "New Delhi"
        }
    ],
    ssc: [{
            question: "Which is the Capital of 'India'?",
            options: ["Punjab", "Delhi", "Gujarat", "Maharashtra"],
            answer: "Delhi"
        },
        {
            question: "which city is known as 'manchester of india'?",
            options: ["Kerala", "Tamil Nadu", "Karnataka", "Ahmedabad"],
            answer: "Ahmedabad"
        }
    ],
    upsc: [{
            question: "Who is known as the 'Father of Indian Constitution'?",
            options: ["Mahatma Gandhi", "Jawaharlal Nehru", "B.R. Ambedkar", "Sardar Vallabhbhai Patel"],
            answer: "B.R. Ambedkar"
        },
        {
            question: "who is the President of India?",
            options: ["Pratibha Tai Patil", "Manmohan Singh", "Drupudi Murmu", "NOT"],
            answer: "Drupudi Murmu"
        }
    ]
};

let currentSubject = 'banking';
let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const submitBtn = document.getElementById('submitBtn');
const resultElement = document.getElementById('result');

function loadQuestion() {
    const currentQuizData = quizData[currentSubject][currentQuestion];
    questionElement.innerText = currentQuizData.question;
    optionsElement.innerHTML = '';
    currentQuizData.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.innerText = `${String.fromCharCode(65 + index)}. ${option}`;
        li.addEventListener('click', () => {
            selectOption(li);
        });
        optionsElement.appendChild(li);
    });
}

function selectOption(selectedOption) {
    const previouslySelected = optionsElement.querySelector('li.selected');
    if (previouslySelected) {
        previouslySelected.classList.remove('selected');
    }
    selectedOption.classList.add('selected');
}

function checkAnswer() {
    const selectedOption = optionsElement.querySelector('li.selected');
    if (!selectedOption) {
        alert('Please select an option.');
        return;
    }
    const userAnswer = selectedOption.innerText.slice(3);
    const correctAnswer = quizData[currentSubject][currentQuestion].answer;
    if (userAnswer === correctAnswer) {
        selectedOption.classList.add('correct');
        score++;
    } else {
        selectedOption.classList.add('incorrect');
        const correctOption = Array.from(optionsElement.children).find(li => li.innerText.slice(3) === correctAnswer);
        if (correctOption) {
            correctOption.classList.add('correct');
        }
    }
}

function showResult() {
    resultElement.innerText = `You scored ${score} out of ${quizData[currentSubject].length}.`;
}

loadQuestion();

submitBtn.addEventListener('click', () => {
    checkAnswer();
    currentQuestion++;
    if (currentQuestion < quizData[currentSubject].length) {
        setTimeout(() => {
            loadQuestion();
            optionsElement.querySelectorAll('li').forEach(li => {
                li.classList.remove('selected', 'correct', 'incorrect');
            });
        }, 1000); // Delay to show the color change before moving to the next question
    } else {
        showResult();
        submitBtn.disabled = true;
    }
});

const subjectDivs = document.querySelectorAll('.subject-container div');
subjectDivs.forEach(subjectDiv => {
    subjectDiv.addEventListener('click', () => {
        currentSubject = subjectDiv.id;
        currentQuestion = 0;
        score = 0;
        submitBtn.disabled = false;
        resultElement.innerText = '';
        loadQuestion();
    });
});
