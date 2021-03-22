const notation = [1, 2, "+", 4, "*", 3, "/"];
const signs = ["+", "-", "*", "/"];

const isSign = (el) => signs.includes(el);

const compute = (item, stack) => {
  const second = stack.pop();
  const first = stack.pop();
  return eval([first, item, second].join(""));
};

function calcInPolishNotation(notation) {
  const stack = [];
  for (const item of notation) {
    if (!isSign(item)) {
      stack.push(item);
    } else {
      stack.push(compute(item, stack));
    }
  }
  return stack.pop();
}

console.log(calcInPolishNotation(notation));
