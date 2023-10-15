const questions = [
    "How many miles do you drive on average per day? A)0-5 B)5-10 C)10-20 D)20+",
    "How long are your showers? A)0-5 B)5-15 C)15+",
    "How often do you order takeout? A)0-2 B)2-4 C)4+",
    "What type of car do you drive? A) No car B) Electric C) Hybrid D) Gas",
    "How do you get your home energy? A) Solar Panels B) Green Electricity Plan C) Power Grid"
];


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

        // Hide score and advice elements
        document.getElementById("score-heading").style.display = "none";
        document.getElementById("score").style.display = "none";
        document.getElementById("advice-heading").style.display = "none";
        document.getElementById("advice").style.display = "none";
    } else {
        questionContainer.style.display = "none";
        calculateAndDisplayResult();
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

// Event listener for the submit button
submitButton.addEventListener("click", function () {
    submitResponse();
});

// Event listener for the Enter key press in the input field
userResponseElement.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        submitResponse();
    }
});

function submitResponse() {
    const userResponse = userResponseElement.value;
    const answer = convertResponseToNumber(userResponse);

    if (answer !== null) {
        answers.push(answer);
        currentQuestionIndex++;
        displayQuestion();
    } else {
        alert("Invalid response. Please enter A, B, C, D, or E");
    }
}

// 

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

    let message;

    if (sum >= 1 && sum <= 5) {
        message = "You have a lot to work on. Try choosing more environmentally friendly options.";
    } else if (sum >= 6 && sum <= 10) {
        message = "You aren't doing bad. Try to step up your environmental friendliness.";
    } else if (sum >= 11 && sum <= 15) {
        message = "You're doing pretty good. Try to be very mindful to be one of the most environmentally friendly people.";
    } else if (sum >= 16 && sum <= 20) {
        message = "You are super friendly. Try to pay attention to the minute details.";
    } else if (sum >= 21 && sum <= 25) {
        message = "You're the most environmentally friendly person to exist.";
    } else {
        message = "Invalid score range.";
    }

    // Show score and advice elements
    document.getElementById("score-heading").style.display = "block";
    document.getElementById("score").style.display = "block";
    document.getElementById("advice-heading").style.display = "block";
    document.getElementById("advice").style.display = "block";

    // Set the total score and advice text based on the score
    scoreElement.textContent = `Your score is: ${sum}`;
    const adviceElement = document.getElementById("advice");
    adviceElement.textContent = message;

    resultContainer.style.display = "block";
}

displayQuestion();

