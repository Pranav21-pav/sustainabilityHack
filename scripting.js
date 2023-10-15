
const questions = [
        "How many miles do you drive on average per day? A)0-5 B)5-10 C)10-20 D)20+",
        "How long are your showers? A)0-5 B)5-15 C)15+",
        "How often do you order takeout? A)0-2 B)2-4 C)4+",
        "What type of car do you drive? A) No car B) Electric C) Hybrid D) Gas",
        "How do you get your home energy? A) Solar Panels B) Green Electricity Plan C) Power Grid"
    ];

    let currentQuestionIndex = 0; // Index of the current question

    const questionContainer = document.getElementById("question-container");
    const questionElement = document.getElementById("question");
    const userResponseElement = document.getElementById("user-response");
    const submitButton = document.getElementById("submit-button");

    // Function to display the current question
    function displayQuestion() {
        if (currentQuestionIndex < questions.length) {
            questionElement.textContent = questions[currentQuestionIndex];
            userResponseElement.value = ""; // Clear the input field
        } else {
            questionContainer.style.display = "none"; // Hide the question container when all questions are answered
            displayResults(); // Call a function to display results or provide feedback
        }
    }

    // Event listener for the submit button
    submitButton.addEventListener("click", function () {
        const userResponse = userResponseElement.value;
        
        // Process userResponse, e.g., save it or perform calculations
        
        currentQuestionIndex++; // Move to the next question
        displayQuestion(); // Display the next question
    });

    // Initialize the first question
    displayQuestion();

/*

const questions = [
    "How many miles do you drive on average per day? A)0-5 B)5-10 C)10-20 D)20+",
    "How long are your showers? A)0-5 B)5-15 C)15+",
    "How often do you order takeout? A)0-2 B)2-4 C)4+",
    "What type of car do you drive? A) No car B) Gas C) Electric D) Hybrid",
    "How do you get your home energy? A) Solar Panels B) Power Grid C) Green Electric Plan"
];

let currentQuestionIndex = 0; // Index of the current question

const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const userResponseElement = document.getElementById("user-response");
const submitButton = document.getElementById("submit-button");

// Function to display the current question
// Function to display questions in HTML
function displayQuestions() {
    const questionsContainer = document.getElementById("questions-container");

    // Loop through the array and create HTML elements for each question
    for (let i = 0; i < questions.length; i++) {
        const question = questions[i];

        // Create a <p> element for the question
        const questionElement = document.createElement("p");
        questionElement.textContent = `Question ${i + 1}: ${question}`;

        // Append the question element to the questions container
        questionsContainer.appendChild(questionElement);
    }
}

// Call the displayQuestions function when the page loads
window.addEventListener("load", displayQuestions);
// Event listener for the submit button
submitButton.addEventListener("click", function () {
    const userResponse = userResponseElement.value;
    
    // Process userResponse, e.g., save it or perform calculations
    
    currentQuestionIndex++; // Move to the next question
    displayQuestion(); // Display the next question
});

// Initialize the first question
displayQuestion();

___________________________________________________________________________________________________


// Convert JavaScript variables to JSON
const dataToSend = {
    variable1: "value1",
    variable2: "value2",
};

// Send data to Python script using AJAX
fetch('processInput.py', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataToSend),
})
.then(response => response.json())
.then(data => {
    // Handle the response from Python
    console.log(data);
})
.catch(error => {
    console.error('Error:', error);
});

*/
