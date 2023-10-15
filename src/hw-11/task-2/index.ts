const generateAllPermutations = <T>(uniqueElements: T[]): T[][] => {
  if (uniqueElements.length === 1) {
    return [uniqueElements];
  }

  const permutations: T[][] = [];

  uniqueElements.forEach((currentElement, i) => {
    const remainingElements = [...uniqueElements.slice(0, i), ...uniqueElements.slice(i + 1)];
    const remainingPermutations = generateAllPermutations(remainingElements);

    remainingPermutations.forEach(permutation => {
      permutations.push([currentElement, ...permutation]);
    });
  });

  return permutations;
};

const inputArray = [1, 2, 3];
const allPermutations = generateAllPermutations(inputArray);
// console.log(allPermutations);
