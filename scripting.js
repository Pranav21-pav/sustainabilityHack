const questions = [
    "How many miles do you drive on average per day? A)0-5 B)5-10 C)10-20 D)20+",
    "How long are your showers? A)0-5 B)5-15 C)15+",
    "How often do you order takeout? A)0-2 B)2-4 C)4+",
    "What type of car do you drive? A) No car B) Electric C) Hybrid D) Gas",
    "How do you get your home energy? A) Solar Panels B) Green Electricity Plan C) Power Grid"
];

// Event listener for the submit button
submitButton.addEventListener("click", function () {
    processUserResponse(); // Function to process user response
    currentQuestionIndex++; // Move to the next question
    displayQuestion(); // Display the next question
});

// Event listener for the Enter key press
userResponseElement.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        processUserResponse(); // Function to process user response
        currentQuestionIndex++; // Move to the next question
        displayQuestion(); // Display the next question
    }
});

function processUserResponse() {
    const userResponse = userResponseElement.value;
    // Process userResponse, e.g., save it or perform calculations
}

const answers = [];
let currentQuestionIndex = 0;
const questionContainer = document.getElementById("question-container");
const resultContainer = document.getElementById("result-container");
const questionElement = document.getElementById("question");
const userResponseElement = document.getElementById("user-response");
const submitButton = document.getElementById("submit-button");
const scoreElement = document.getElementById("score");

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionElement.textContent = questions[currentQuestionIndex];
        userResponseElement.value = "";
    } else {
        questionContainer.style.display = "none";
        calculateAndDisplayResult();
    }
}

submitButton.addEventListener("click", function () {
    const userResponse = userResponseElement.value;
    const answer = convertResponseToNumber(userResponse);
    
    if (answer !== null) {
        answers.push(answer);
        currentQuestionIndex++;
        displayQuestion();
    } else {
        alert("Invalid response. Please enter A, B, C, D, or E");
    }
});

function convertResponseToNumber(response) {
    response = response.toUpperCase();
    if (response === 'A') return 1;
    if (response === 'B') return 2;
    if (response === 'C') return 3;
    if (response === 'D') return 4;
    if (response === 'E') return 5;
    return null;
}

function calculateAndDisplayResult() {
    const sum = answers.reduce((total, num) => total + num, 0);
    scoreElement.textContent = `Your score is: ${sum}`;
    resultContainer.style.display = "block";
}

displayQuestion();
