const waitTime = 7000;
console.log(`Your order will be ready in ${waitTime / 1000} seconds`);

const timerFinished = () => console.log("done. Thank you for your order!");

setTimeout(timerFinished, waitTime);
