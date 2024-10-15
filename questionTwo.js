
function chatbot(questionAnswerPairs, userQuestion) {
    userQuestion = userQuestion.toLowerCase();
    let closestMatch = "";
    let highestCommonWords = 0;
    
    questionAnswerPairs.forEach(pair => {
        const predefinedQuestion = pair.question.toLowerCase();
        const commonWords = predefinedQuestion.split(' ').filter(word => userQuestion.includes(word));
        
        if (commonWords.length > highestCommonWords) {
            highestCommonWords = commonWords.length;
            closestMatch = pair.answer;
        }
    });
    
    return closestMatch || "Sorry, I don't understand the question.";
}

// Example usage:
const qaPairs = [
    { question: "What is your name?", answer: "My name is Chatbot." },
    { question: "How can I help you?", answer: "I can assist you with your queries." },
    { question: "What is the weather today?", answer: "The weather is sunny." }
];

const userQuestion = "What's the weather like today?";
console.log(chatbot(qaPairs, userQuestion)); 

