const num = 266219;
const digitMultiply = (digits) => {
  let res = 1;
  for (let i = 0; i < digits.length; i++) {
    res *= digits[i];
  }
  return res;
};

const resultDigits = digitMultiply(num.toString());

console.log(resultDigits);

const grade = resultDigits** 3;

console.log(grade.toString().substring(0, 2));
