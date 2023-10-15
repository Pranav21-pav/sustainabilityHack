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

let submitCount = 0; // Initialize a variable to count the number of times the submit button is pressed

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        questionElement.textContent = questions[currentQuestionIndex];
        userResponseElement.value = "";
        resultContainer.style.display = "none"; // Hide the result container when showing a new question
    } else {
        questionContainer.style.display = "none";
        if (submitCount === 4) {
            calculateAndDisplayResult();
        }
    }
   
    // Check if questions are displayed, then hide the result elements
    if (currentQuestionIndex < questions.length) {
        scoreElement.style.display = "none";
        document.getElementById("advice").style.display = "none";
    } else {
        scoreElement.style.display = "block";
        document.getElementById("advice").style.display = "block";
    }
}

submitButton.addEventListener("click", function () {
    const userResponse = userResponseElement.value;
    const answer = convertResponseToNumber(userResponse);
   
    if (answer !== null) {
        answers.push(answer);
        currentQuestionIndex++;
        displayQuestion();
        submitCount++;
    } else {
        alert("Invalid response. Please enter A, B, C, D, or E");
    }
});

// Event listener for the Enter key press in the input field
userResponseElement.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        const userResponse = userResponseElement.value;
        const answer = convertResponseToNumber(userResponse);
       
        if (answer !== null) {
            answers.push(answer);
            currentQuestionIndex++;
            displayQuestion();
            submitCount++;
        } else {
            alert("Invalid response. Please enter A, B, C, D, or E");
        }
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
    if (currentQuestionIndex === 4) { // Check if it's the 5th question (index 4)
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

        // Set the total score and advice text based on the score
        scoreElement.textContent = `Your score is: ${sum}`;
        const adviceElement = document.getElementById("advice");
        adviceElement.textContent = message;

        resultContainer.style.display = "block";

        // Navigate to the "results.html" page
        window.location.href = "results.html";
    }
}

displayQuestion();
