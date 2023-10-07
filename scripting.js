document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggle-button");
    const loginContainer = document.getElementById("login-container");
    const signupPage = document.getElementById("signup-page");

    toggleButton.addEventListener("click", function() {
        if (loginContainer.style.display === "none") {
            loginContainer.style.display = "block";
            signupPage.style.display = "none";
            toggleButton.textContent = "Sign Up"; // Change button text to "Sign Up"
        } else {
            loginContainer.style.display = "none";
            signupPage.style.display = "block";
            toggleButton.textContent = "Login"; // Change button text to "Login"
        }
    });
});


    const questions = [
        "How many miles do you drive on average per day? A)0-5 B)5-10 C)10-20 D)20+",
        "How long are your showers? A)0-5 B)5-15 C)15+",
        "How often do you order takeout? A)0-2 B)2-4 C)4+",
        "What type of car do you drive? A) No car B) Electric C) Hybrid D) Gas",
        "How do you get your home energy? A) Solar Panels B) Green Electricity Plan C) Power Grid"
    ];

    let currentQuestionIndex = 0; // Index of the current question

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
});
