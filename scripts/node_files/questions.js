const questions = [
  "What would you like to order?",
  "What's the order name?"
];

const ask = (i = 0) => {
  process.stdout.write(`\n\n\n ${questions[i]}`);
  process.stdout.write(` => `);
};

ask();

const answers = [];
process.stdin.on("data", data => {
  answers.push(data.toString().trim());

  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

//listerner - send your answers back 
process.on("exit", () => {
  const [order, name] = answers;
  console.log(`
  
Thank you for your order.

Your ${order} will be ready in few minutes. The order name is ${name}.

  
  `);
});
