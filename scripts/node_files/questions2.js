const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "What would like to drink? ",
  "What would like to eat? ",
  "What's the name order? "
];

const collectAnswers = (questions, done) => {
  const answers = [];
  const [firstQuestion] = questions;

  const questionAnswered = answer => {
    answers.push(answer);
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered);
    } else {
      done(answers);
    }
  };

  rl.question(firstQuestion, questionAnswered);
};

collectAnswers(questions, answers => {
  console.log("Thank you for your order. ");
  console.log(answers);
  process.exit();
});
