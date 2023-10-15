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



displayQuestion();