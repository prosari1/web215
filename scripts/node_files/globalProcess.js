console.log(process.pid);
console.log(process.versions.node);
console.log(process.argv);

// second part
const grab = flag => {
  let indexAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexAfterFlag];
};

const coffee = grab("--coffee");
const style = grab("--style");

console.log(`${coffee} coffee ${style}`);
