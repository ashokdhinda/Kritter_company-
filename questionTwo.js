function chatbot(questionAnswer, userQuestion) {
  userQuestion = userQuestion.toLowerCase();

  let closesquestion = "";
  let closestDistance = Infinity;
  questionAnswer.forEach((pair) => {
    const predefinedQuestion = pair.question.toLowerCase();
    const commonWords = predefinedQuestion
      .split("")
      .filter((word) => userQuestion.includes(word));
    const distance = predefinedQuestion.length - commonWords.length;
    if (distance < closesquestion) {
      closestDistance = distance;
      closesquestion = pair.answer;
    }
  });
  return closesquestion || "Sorry, I don't understand the question.";
}
const qaPairs = [
  { question: "What is your name?", answer: "My name is Chatbot." },
  {question: "How can I help you?",    answer: "I can assist you with your queries.",  },
  { question: "What is the weather today?", answer: "The weather is sunny." },
];

const userQuestion1 = "What is the weather today?";
console.log(chatbot(qaPairs, userQuestion1));
