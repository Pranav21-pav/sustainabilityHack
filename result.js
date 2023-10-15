const fs = require('fs');

// Read the user responses from "userResponses.json"
fs.readFile('userResponses.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading userResponses.json:', err);
    } else {
        // Parse the JSON data into an array of responses
        const userResponses = JSON.parse(data);

        // Initialize an array to store scores for each question
        const questionScores = [0, 0, 0, 0, 0]; // One score for each question

        // Define a function to convert user responses to scores (A:1, B:2, C:3, D:4, E:5)
        function convertResponseToScore(response) {
            switch (response) {
                case 'A':
                    return 1;
                case 'B':
                    return 2;
                case 'C':
                    return 3;
                case 'D':
                    return 4;
                case 'E':
                    return 5;
                default:
                    return 0; // Handle invalid responses as needed
            }
        }

        // Process each user response
        userResponses.forEach((response) => {
            const userResponse = response.response;
            
            // Process each question separately
            for (let i = 0; i < questionScores.length; i++) {
                const score = convertResponseToScore(userResponse[i]);
                questionScores[i] += score;
            }
        });

        // Now you have the total scores for each question in the questionScores array
        questionScores.forEach((score, index) => {
            console.log(`Question ${index + 1} Score: ${score}`);
        });
    }
});
