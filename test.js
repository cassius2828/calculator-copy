const operators = ["*", "/", "+", "-"];

const operatorCheck = () => {
  operators.map((item) => {
    if (item === topDisplay.charAt(topDisplay.length - 2)) {
      topDisplay.slice(0, topDisplay.charAt(topDisplay.length - 1));
    }
  });
};

const topDisplay = "5*-+";

console.log(operatorCheck(topDisplay));
