let questions = [
    {
        question: "1) What is Html",
        choices: ["Hyper text markup language", "Hyper text machine language", "Hyprt text markery languange"],
        correctAnswer: "Hyper text markup language"
    },
    {
        question: "2) What is Css",
        choices: ["cascading style sheet", "class section sheet", "color style sheet"],
        correctAnswer: "cascading style sheet",
    },
    {
        question: "3) Pakistan have won the world cup match",
        choices: ["1992", "1998", "1993", "1995"],
        correctAnswer: "1992",
    }
];

 let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById('question');
    const choicesElement = document.getElementById('choices');

    questionElement.innerHTML = questions[currentQuestion].question;
    choicesElement.innerHTML = '';
    questions[currentQuestion].choices.forEach(choice => {
        let button = document.createElement('button');
        let div= document.createElement('div')
            div.id='check-box';
            div.innerHTML='div'
            button.id= 'select-choices';
        button.textContent = choice;
        button.addEventListener('click', () => checkAnswer(choice));
        choicesElement.appendChild(button);
    });
}

function checkAnswer(choice) {
    if (choice === questions[currentQuestion].correctAnswer) {
        score++;
    }
    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const resultElement = document.getElementById('result');
    alert('Congrats: You have complete your task')
    resultElement.textContent = `Your score: ${score} out of ${questions.length}`;
    document.getElementById('submit').style.display = 'none';
}

document.getElementById('submit').addEventListener('click', displayQuestion);
displayQuestion();

