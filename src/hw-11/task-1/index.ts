interface IReverseAndAddResult {
  result: number | null;
  steps: number;
}

type PalindromeFuncType = (num: number) => boolean;
type ReverseAndAddFuncType = (num: number, maxSteps: number) => IReverseAndAddResult;

const isPalindrome: PalindromeFuncType = (num: number): boolean => {
  const numStr = num.toString();
  const reverseStr = numStr.split('').reverse().join('');
  return numStr === reverseStr;
};

const reverseAndAdd: ReverseAndAddFuncType = (num: number, maxSteps: number): IReverseAndAddResult => {
  let steps = 0;

  while (steps < maxSteps) {
    const numStr = num.toString();
    const reverseStr = numStr.split('').reverse().join('');
    const reverseNum = parseInt(reverseStr, 10);

    num += reverseNum;
    steps++;

    if (isPalindrome(num)) {
      return { result: num, steps };
    }
  }

  return { result: null, steps };
};

const number = 196;
const MAX_STEPS = 1000;
const { result, steps } = reverseAndAdd(number, MAX_STEPS);

// if (result !== null) {
//   console.log(`The palindrome for the number ${number} is ${result}, found in ${steps} steps.`);
// } else {
//   console.log(`For the number ${number}, it was not possible to find a palindrome within ${MAX_STEPS} steps.`);
// }
